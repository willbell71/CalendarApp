import * as React from 'react';
import * as reactDOM from 'react-dom';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { CalendarService } from './services/calendar/calendar-service';
import { DayPage } from './day-page/day-page';
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
          prev={ () => {} }
          today={ () => {} }
          next={ () => {} }
        />
        <DayPage
          date={ this.state.date }
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
          prev={ () => {} }
          today={ () => {} }
          next={ () => {} }
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
          prev={ () => {} }
          today={ () => {} }
          next={ () => {} }
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
          prev={ () => {} }
          today={ () => {} }
          next={ () => {} }
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
