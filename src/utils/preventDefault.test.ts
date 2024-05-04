import { preventDefault } from './preventDefault';

describe('preventDefault', () => {
  test('should call preventDefault method of the event object', () => {
    // Mocking MouseEvent object
    const eventMock = {
      preventDefault: jest.fn(),
    };

    // Calling the function with the mocked event object
    preventDefault(eventMock);

    // Verifying that preventDefault method is called
    expect(eventMock.preventDefault).toHaveBeenCalled();
  });
});
