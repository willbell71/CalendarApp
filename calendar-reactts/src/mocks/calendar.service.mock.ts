import { ICalendarService } from '../services/calendar/icalendar-service';

export const calendarServiceMock: ICalendarService = {
  getDayName: jest.fn().mockImplementation((dayIndex: number): string => 'Monday'),
  getMonthName: jest.fn().mockImplementation((monthIndex: number): string => 'January'),
  getDayColumnTitle: jest.fn().mockImplementation((): string[] => ['M', 'T', 'W', 'T', 'F', 'S', 'S']),
  getDayColumnLongTitle: jest.fn().mockImplementation((): string[] => ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']),
  getStartOfMonthGridDate: jest.fn().mockImplementation((start: Date): Date => new Date(2019, 8, 28)),
  getStartOfWeekGridDate: jest.fn().mockImplementation((start: Date): Date => new Date(2019, 8, 30))
};
