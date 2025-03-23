"use client"

// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const App: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date(2025, 2, 13));
  const [selectedTime, setSelectedTime] = useState<string>('');

  const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const timeSlots = [
    '09:00 AM', '10:00 AM',
    '11:00 AM', '02:00 PM',
    '03:00 PM', '04:00 PM',
    '05:00 PM'
  ];

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const generateCalendarDays = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    
    const prevMonth = month === 0 ? 11 : month - 1;
    const prevYear = month === 0 ? year - 1 : year;
    const daysInPrevMonth = getDaysInMonth(prevYear, prevMonth);

    const days = [];
    
    // Previous month days
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({
        date: daysInPrevMonth - i,
        isCurrentMonth: false,
        isPrevMonth: true
      });
    }

    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        date: i,
        isCurrentMonth: true,
        isSelected: i === selectedDate.getDate()
      });
    }

    // Next month days
    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: i,
        isCurrentMonth: false,
        isNextMonth: true
      });
    }

    return days;
  };

  const handleDateClick = (day: number, isCurrentMonth: boolean) => {
    if (isCurrentMonth) {
      setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day));
    }
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleBookAppointment = () => {
    if (selectedTime) {
      const formattedDate = selectedDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      console.log(`Appointment booked for ${formattedDate} at ${selectedTime}`);
    }
  };

  const monthYear = selectedDate.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md p-6 bg-white shadow-lg">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Select Date</h2>
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <button className="text-gray-600 hover:text-gray-900 cursor-pointer">
                <i className="fas fa-chevron-left"></i>
              </button>
              <span className="font-medium">{monthYear}</span>
              <button className="text-gray-600 hover:text-gray-900 cursor-pointer">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-2">
              {daysOfWeek.map((day) => (
                <div key={day} className="text-center text-sm text-gray-600 font-medium py-1">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {generateCalendarDays().map((day, index) => (
                <div
                  key={index}
                  onClick={() => handleDateClick(day.date, day.isCurrentMonth)}
                  className={`
                    cursor-pointer text-center py-2 text-sm rounded-md transition-colors
                    ${day.isCurrentMonth 
                      ? day.isSelected
                        ? 'bg-black text-white'
                        : 'hover:bg-gray-100'
                      : 'text-gray-400'
                    }
                  `}
                >
                  {day.date}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium mb-4">Available Time Slots</h3>
            <div className="grid grid-cols-2 gap-3">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => handleTimeSelect(time)}
                  className={`
                    py-2 px-4 text-sm border rounded-lg transition-colors cursor-pointer
                    ${selectedTime === time 
                      ? 'bg-black text-white border-black' 
                      : 'border-gray-200 hover:border-gray-300'
                    }
                  `}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          <Button
            onClick={handleBookAppointment}
            disabled={!selectedTime}
            className="w-full mt-6 bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed !rounded-button whitespace-nowrap"
          >
            Book Appointment
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default App;

