import { ICalendarService } from '../services/calendar/icalendar-service';

export const calendarServiceMock: ICalendarService = {
  getDayName: jest.fn().mockImplementation((dayIndex: number): string => 'Monday'),
  getMonthName: jest.fn().mockImplementation((monthIndex: number): string => 'January'),
  getDayColumnTitle: jest.fn().mockImplementation((): string[] => ['M', 'T', 'W', 'T', 'F', 'S', 'S']),
  getDayColumnLongTitle: jest.fn().mockImplementation((): string[] => ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']),
  getStartOfMonthGridDate: jest.fn().mockImplementation((start: Date): Date => new Date(2019, 8, 28)),
  getStartOfWeekGridDate: jest.fn().mockImplementation((start: Date): Date => new Date(2019, 8, 30)),
  getTimeNames: jest.fn().mockImplementation(() => [
    'All Day', '00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00',
    '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00',
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'])
};
