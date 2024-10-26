import React, { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameDay,
} from "date-fns";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const handleNextMonth = () => {
    setCurrentMonth((prev) => new Date(prev.setMonth(prev.getMonth() + 1)));
  };

  const handlePrevMonth = () => {
    setCurrentMonth((prev) => new Date(prev.setMonth(prev.getMonth() - 1)));
  };

  const days = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });

  const events = {
    "2022-01-21": [
      { time: "1:00 PM - 2:30 PM", name: "Leslie Alexander" },
      { time: "3:00 PM - 4:30 PM", name: "Michael Foster" },
    ],
  };

  const handleDayClick = (day) => {
    setSelectedDate(day);
  };

  const renderSchedule = () => {
    if (!selectedDate || !events[format(selectedDate, "yyyy-MM-dd")])
      return null;

    return (
      <div className="mt-4 p-4 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
        <h3 className="text-lg font-semibold text-gray-700">
          Schedule for {format(selectedDate, "MMMM dd, yyyy")}
        </h3>
        {events[format(selectedDate, "yyyy-MM-dd")].map((event, index) => (
          <div key={index} className="flex justify-between py-1">
            <span className="text-gray-600">{event.name}</span>
            <span className="text-gray-500">{event.time}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex items-center justify-center py-8 px-4">
      <div className="max-w-sm w-full shadow-lg rounded-lg overflow-hidden">
        <div className="md:p-8 p-5 bg-white rounded-t-lg">
          <div className="px-4 flex items-center justify-between">
            <span className="text-lg font-bold text-gray-800">
              {format(currentMonth, "MMMM yyyy")}
            </span>
            <div className="flex items-center">
              <button
                aria-label="calendar backward"
                onClick={handlePrevMonth}
                className="transition-transform transform hover:scale-110 text-gray-800 hover:text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-left"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  fill="none"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="15 6 9 12 15 18" />
                </svg>
              </button>
              <button
                aria-label="calendar forward"
                onClick={handleNextMonth}
                className="ml-3 transition-transform transform hover:scale-110 text-gray-800 hover:text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-right"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  fill="none"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="9 6 15 12 9 18" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between pt-12 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map(
                    (day, index) => (
                      <th key={index}>
                        <div className="w-full flex justify-center">
                          <p className="text-base font-medium text-center text-gray-800">
                            {day}
                          </p>
                        </div>
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 6 }).map((_, rowIndex) => (
                  <tr key={rowIndex}>
                    {days
                      .slice(rowIndex * 7, rowIndex * 7 + 7)
                      .map((day, dayIndex) => (
                        <td key={dayIndex} className="pt-6">
                          <div
                            onClick={() => handleDayClick(day)}
                            className={`cursor-pointer flex w-full justify-center rounded-lg transition-colors duration-300 ${
                              isSameDay(day, selectedDate)
                                ? "bg-indigo-500 text-white"
                                : "hover:bg-indigo-100"
                            }`}
                          >
                            <p
                              className={`text-base transition-transform duration-300 ${
                                isSameDay(day, selectedDate)
                                  ? "font-bold"
                                  : "text-gray-500"
                              }`}
                            >
                              {day.getDate()}
                            </p>
                          </div>
                        </td>
                      ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="md:py-8 py-5 bg-gray-50 rounded-b-lg">
          {renderSchedule()}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
