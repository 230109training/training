// Import Dependencies
import React from 'react';

// Import API for mocking utilities from Mock Service Worker
import {rest} from 'msw';
import {setupServer} from 'msw/node';

// Import react-testing methods
import {render, fireEvent, screen, waitFor} from '@testing-library/react';

// Add custom jest matchers from jest-dom
import '@testing-library/jest-dom';

// The component that we are testing
import Fetch from '../Fetch';

/**
 * test('loads and does something', async () => {
 *  // Arrange
 *  // Act
 *  // Assert
 * })
 */

// Declare which API requests to mock
const server = setupServer(
    // We can capture any type of request
    rest.get('/greeting', (req, res, ctx) => {
        // We are sending back a response of JSON body
        // AKA mocking the response
        return res(ctx.json({greeting: 'hello there'}));
    })
)

// We use the beforeAll hook to establish API mocking before any tests are run
beforeAll(() => server.listen());

// We reset the handler for any requests, this is useful when testing for errors
afterEach(() => server.resetHandlers());

// We clean up once the tests are done, by closing the server
afterAll(() => server.close());


test('loads and displays greeting', async () => {
    // Arrange
    // The render method renders a react element into the DOM
    render(<Fetch url="/greeting"/>)

    // Act
    // The fireEvent method that allows you to trigger events to simulate user actions
    fireEvent.click(screen.getByText('Load Greeting'));

    // we wait until the 'get' request promise resolves and the component calls setState and re-renders the page
    // waitFor() will wait until the callback doesn't throw an error
    await waitFor(() => screen.getByRole('heading'));

    // Assert

    // We assert that the ehading text should contain 'hello there'
    // This is doen using the toHaveTextContent which is a custom matcher from jest-dom
    expect(screen.getByRole('heading')).toHaveTextContent('hello there')

    // Assert
    // We also assert that the button is disabled with toBeDisabled, another custom matcher
    expect(screen.getByRole('button')).toBeDisabled();
})

test('handles server error', async() => {
    // ovverride the endpoint in order to get an error response
    // We can mock it for only a specific test, instead of the entire test file
    server.use(
        rest.get('/greeting', (req, res, ctx) => {
            return res(ctx.status(500))
        })
    )

    render(<Fetch url="/greeting"/>);

    fireEvent.click(screen.getByText('Load Greeting'));

    await waitFor(() => screen.getByRole('alert'));

    expect(screen.getByRole('alert')).toHaveTextContent('Failed to fetch!');

    expect(screen.getByRole("button")).not.toBeDisabled();
})