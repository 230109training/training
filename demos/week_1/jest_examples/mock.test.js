/**
 * Mocking is a technique for isolating your test subjects by replacing dependencies with objects that we can control and inspect. A dependency is anything that your subject depends on.
 * 
 * Jest provides mocking straight out of the box, but there are mocking frameworks that you can use like testdouble
 * 
 * The goal for mocking is to replaces somethign that we don't control with something that we do
 * 
 * The mock function provides features to;
 * 
 * - Capture calls
 * - Set return values
 * - Change the implementation
 * 
 * The simplest way to create a mock is by using the jest.fn();
 */

test("returns undefined by default", () => {
    const mockFunction = jest.fn();

    let result = mockFunction("foo");

    expect(result).toBeUndefined();
    expect(mockFunction).toHaveBeenCalled();
    expect(mockFunction).toHaveBeenCalledTimes(1);
    expect(mockFunction).toHaveBeenCalledWith("foo");
})

// Different mock implementations

test("mock implementation 1", () => {
    const mockFunction = jest.fn(() => "bar");

    expect(mockFunction("foo")).toBe("bar");
    expect(mockFunction).toHaveBeenCalledWith("foo");
});

test("mock implementation 2", () => {
    const mockFunction = jest.fn().mockImplementation(() => "bar");
    expect(mockFunction("foo")).toBe("bar");
    expect(mockFunction).toHaveBeenCalledWith("foo");
});

test("mock implementation 3", () => {
    const mockFunction = jest.fn().mockImplementationOnce(() => "bar");

    expect(mockFunction("foo")).toBe("bar");
    expect(mockFunction).toHaveBeenCalledWith("foo");

    expect(mockFunction("has")).toBeUndefined();
    expect(mockFunction).toHaveBeenCalledWith("has");
})

test("mock return value", () => {
    const mockFunction = jest.fn();
    mockFunction.mockReturnValue("bar");

    expect(mockFunction("foo")).toBe("bar");
    expect(mockFunction).toHaveBeenCalledWith("foo");
})


test("mock promise resolution", () => {
    const mockFunction = jest.fn();

    mockFunction.mockResolvedValue("bar");

    expect(mockFunction("foo")).resolves.toBe("bar");
    expect(mockFunction).toHaveBeenCalledWith("foo");
});







