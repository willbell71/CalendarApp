import { CalendarService } from './calendar-service';
import { ICalendarService } from './icalendar-service';

let service: ICalendarService;
beforeEach(() => {
  service = new CalendarService();
});
afterEach(() => jest.restoreAllMocks());

describe('calendar-service', () => {
  it('should instantiate', () => {
    expect(service).toBeTruthy();
  });

  describe('getDayName', () => {
    it('should return Sunday for index 0', () => {
      expect(service.getDayName(0)).toEqual('Sunday');
    });

    it('should return Monday for index 1', () => {
      expect(service.getDayName(1)).toEqual('Monday');
    });

    it('should return Tuesday for index 2', () => {
      expect(service.getDayName(2)).toEqual('Tuesday');
    });

    it('should return Wednesday for index 3', () => {
      expect(service.getDayName(3)).toEqual('Wednesday');
    });

    it('should return Thursday for index 4', () => {
      expect(service.getDayName(4)).toEqual('Thursday');
    });

    it('should return Friday for index 5', () => {
      expect(service.getDayName(5)).toEqual('Friday');
    });

    it('should return Saturday for index 6', () => {
      expect(service.getDayName(6)).toEqual('Saturday');
    });
  });

  describe('getMonthName', () => {
    it('should return January for index 0', () => {
      expect(service.getMonthName(0)).toEqual('January');
    });

    it('should return February for index 1', () => {
      expect(service.getMonthName(1)).toEqual('February');
    });

    it('should return March for index 2', () => {
      expect(service.getMonthName(2)).toEqual('March');
    });

    it('should return April for index 3', () => {
      expect(service.getMonthName(3)).toEqual('April');
    });

    it('should return May for index 4', () => {
      expect(service.getMonthName(4)).toEqual('May');
    });

    it('should return June for index 5', () => {
      expect(service.getMonthName(5)).toEqual('June');
    });

    it('should return July for index 6', () => {
      expect(service.getMonthName(6)).toEqual('July');
    });

    it('should return August for index 7', () => {
      expect(service.getMonthName(7)).toEqual('August');
    });

    it('should return September for index 8', () => {
      expect(service.getMonthName(8)).toEqual('September');
    });

    it('should return October for index 9', () => {
      expect(service.getMonthName(9)).toEqual('October');
    });

    it('should return November for index 10', () => {
      expect(service.getMonthName(10)).toEqual('November');
    });

    it('should return December for index 11', () => {
      expect(service.getMonthName(11)).toEqual('December');
    });
  });

  describe('getDayColumnTitle', () => {
    it('should return a list of days starting with M', () => {
      expect(service.getDayColumnTitle().length).toEqual(7);
      expect(service.getDayColumnTitle()[0]).toEqual('M');
    });

    it('should return a list of days with T', () => {
      expect(service.getDayColumnTitle()[1]).toEqual('T');
    });

    it('should return a list of days with W', () => {
      expect(service.getDayColumnTitle()[2]).toEqual('W');
    });

    it('should return a list of days with T', () => {
      expect(service.getDayColumnTitle()[3]).toEqual('T');
    });

    it('should return a list of days with F', () => {
      expect(service.getDayColumnTitle()[4]).toEqual('F');
    });

    it('should return a list of days with S', () => {
      expect(service.getDayColumnTitle()[5]).toEqual('S');
    });

    it('should return a list of days with S', () => {
      expect(service.getDayColumnTitle()[6]).toEqual('S');
    });
  });

  describe('getDayColumnLongTitle', () => {
    it('should return a list of days starting with Mon', () => {
      expect(service.getDayColumnLongTitle().length).toEqual(7);
      expect(service.getDayColumnLongTitle()[0]).toEqual('Mon');
    });

    it('should return a list of days with Tue', () => {
      expect(service.getDayColumnLongTitle()[1]).toEqual('Tue');
    });

    it('should return a list of days with Wed', () => {
      expect(service.getDayColumnLongTitle()[2]).toEqual('Wed');
    });

    it('should return a list of days with Thu', () => {
      expect(service.getDayColumnLongTitle()[3]).toEqual('Thu');
    });

    it('should return a list of days with Fri', () => {
      expect(service.getDayColumnLongTitle()[4]).toEqual('Fri');
    });

    it('should return a list of days with Sat', () => {
      expect(service.getDayColumnLongTitle()[5]).toEqual('Sat');
    });

    it('should return a list of days with Sun', () => {
      expect(service.getDayColumnLongTitle()[6]).toEqual('Sun');
    });
  });

  describe('getStartOfMonthGridDate', () => {
    it('should return 1 for July', () => {
      expect(service.getStartOfMonthGridDate(new Date(2019, 6, 8)).getDate()).toEqual(1);
    });

    it('should return 27 for June', () => {
      expect(service.getStartOfMonthGridDate(new Date(2019, 5, 8)).getDate()).toEqual(27);
    });

    it('should return 26 for September', () => {
      expect(service.getStartOfMonthGridDate(new Date(2019, 8, 8)).getDate()).toEqual(26);
    });
  });

  describe('getStartOfWeekGridDate', () => {
    it('should return 30 for Oct 6', () => {
      expect(service.getStartOfWeekGridDate(new Date(2019, 9, 6)). getDate()).toEqual(30);
    });

    it('should return 30 for Sept 30', () => {
      expect(service.getStartOfWeekGridDate(new Date(2019, 8, 30)). getDate()).toEqual(30);
    });
  });
});
