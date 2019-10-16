import * as React from 'react';
import * as reactDOM from 'react-dom';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { CalendarService } from './services/calendar/calendar-service';
import { DayPage } from './day-page/day-page';
import { EPeriod } from './EPeriod';
import { ICalendarService } from './services/calendar/icalendar-service';
import { MonthPage } from './month-page/month-page';
import { NavBar } from './shared/nav-bar/nav-bar';
import { TitleBar } from './shared/title-bar/title-bar';
import { WeekPage } from './week-page/week-page';
import { YearPage } from './year-page/year-page';

import './styles.scss';

/**
 * Component state.
 * @property {Date} date - date current visible in calendar.
 */
type TState = {
  date: Date;
};

/**
 * App component.
 */
class App extends React.Component<{}, TState> {
  // calendar service
  private calendarService: ICalendarService;

  // @member {TState} state - component state.
  public state: TState = {
    date: new Date()
  };

  /**
   * Constructor.
   * @param {{}} props - component properties.
   */
  public constructor(props: {}) {
    super(props);

    this.calendarService = new CalendarService();
  }

  /**
   * Set today.
   */
  private setToday: () => void = (): void => {
    this.setState({
      date: new Date()
    });
  }

  /**
   * Next date.
   * @param {EPeriod} period - period to skip forward.
   */
  private nextDate: (period: EPeriod) => void = (period: EPeriod): void => {
    const date: Date = this.state.date;

    switch (period) {
      case EPeriod.eDay: date.setDate(date.getDate() + 1); break;
      case EPeriod.eWeek: date.setDate(date.getDate() + 7); break;
      case EPeriod.eMonth: date.setMonth(date.getMonth() + 1); break;
      case EPeriod.eYear: date.setFullYear(date.getFullYear() + 1); break;
      default: break;
    }

    this.setState({
      date
    });
  }

  /**
   * Previous date.
   * @param {EPeriod} period - period to skip back.
   */
  private prevDate: (period: EPeriod) => void = (period: EPeriod): void => {
    const date: Date = this.state.date;

    switch (period) {
      case EPeriod.eDay: date.setDate(date.getDate() - 1); break;
      case EPeriod.eWeek: date.setDate(date.getDate() - 7); break;
      case EPeriod.eMonth: date.setMonth(date.getMonth() - 1); break;
      case EPeriod.eYear: date.setFullYear(date.getFullYear() - 1); break;
      default: break;
    }

    this.setState({
      date
    });
  }

  /**
   * Render day component.
   * @return {JSX.Element} component render.
   */
  private dayPageComponent: () => JSX.Element = () => {
    return (
      <>
        <TitleBar
          calendarService={ this.calendarService }
          date={ this.state.date }
          showDate={ true }
          showMonth={ true }
          showYear={ true }
          showDay={ true }
          prev={ this.prevDate }
          today={ this.setToday }
          next={ this.nextDate }
          period={ EPeriod.eDay }
        />
        <DayPage
          calendarService={ this.calendarService }
          date={ this.state.date }
          today={ new Date() }
        />
      </>
    );
  }

  /**
   * Render week component.
   * @return {JSX.Element} component render.
   */
  private weekPageComponent: () => JSX.Element = () => {
    return (
      <>
        <TitleBar
          calendarService={ this.calendarService }
          date={ this.state.date }
          showDate={ false }
          showMonth={ true }
          showYear={ true }
          showDay={ false }
          prev={ this.prevDate }
          today={ this.setToday }
          next={ this.nextDate }
          period={ EPeriod.eWeek }
        />
        <WeekPage
          date={ this.state.date }
          calendarService={ this.calendarService }
          today={ new Date() }
        />
      </>
    );
  }

  /**
   * Render month component.
   * @return {JSX.Element} component render.
   */
  private monthPageComponent: () => JSX.Element = () => {
    return (
      <>
        <TitleBar
          calendarService={ this.calendarService }
          date={ this.state.date }
          showDate={ false }
          showMonth={ true }
          showYear={ true }
          showDay={ false }
          prev={ this.prevDate }
          today={ this.setToday }
          next={ this.nextDate }
          period={ EPeriod.eMonth }
        />
        <MonthPage
          calendarService= { this.calendarService }
          date={ this.state.date }
          today={ new Date() }
        />
      </>
    );
  }

  /**
   * Render year component.
   * @return {JSX.Element} component render.
   */
  private yearPageComponent: () => JSX.Element = () => {
    return (
      <>
        <TitleBar
          calendarService={ this.calendarService }
          date={ this.state.date }
          showDate={ false }
          showMonth={ false }
          showYear={ true }
          showDay={ false }
          prev={ this.prevDate }
          today={ this.setToday }
          next={ this.nextDate }
          period={ EPeriod.eYear }
        />
        <YearPage
          date={ this.state.date }
          calendarService={ this.calendarService }
          today={ new Date() }
        />
      </>
    );
  }

  /**
   * Render.
   * @return {JSX.Element} component render.
   */
  public render(): JSX.Element {
    return (
      <BrowserRouter>
        <NavBar
          calendars={ () => {} }
          add={ () => {} }
          search={ () => {} }
        />

        <main
          className="app__container"
        >
          <Switch>
            <Route
              path="/day"
              exact
              component={this.dayPageComponent}
            />

            <Route
              path="/week"
              component={this.weekPageComponent}
            />

            <Route
              path="/month"
              component={this.monthPageComponent}
            />

            <Route
              path="/year"
              component={this.yearPageComponent}
            />

            <Redirect
              from="*"
              to="/year"
            />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

reactDOM.render(<App/>, document.getElementById('app'));
