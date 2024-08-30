import React,  { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';

const StudentDashboard = () => {
  // Mock data - in a real application, this would come from an API or database
  const studentInfo = {
    name: "Jane Doe",
    id: "STU001",
    course: "Computer Science",
    year: "3rd Year"
  };

  const attendanceData = [
    { subject: 'Math', attendance: 85 },
    { subject: 'Physics', attendance: 92 },
    { subject: 'Computer Science', attendance: 88 },
    { subject: 'English', attendance: 78 },
  ];

  const feesInfo = {
    total: 10000,
    paid: 7500,
    due: 2500,
    dueDate: "2024-09-30"
  };

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>
      
      {/* Student Profile */}
      <Card>
        <CardHeader>
          <CardTitle>Student Profile</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center space-x-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src="/api/placeholder/100/100" alt={studentInfo.name} />
            <AvatarFallback>{studentInfo.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl font-semibold">{studentInfo.name}</h2>
            <p>ID: {studentInfo.id}</p>
            <p>Course: {studentInfo.course}</p>
            <p>Year: {studentInfo.year}</p>
          </div>
        </CardContent>
      </Card>

      {/* Attendance */}
      <Card>
        <CardHeader>
          <CardTitle>Attendance</CardTitle>
        </CardHeader>
        <CardContent>
          {attendanceData.map((subject, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between mb-1">
                <span>{subject.subject}</span>
                <span>{subject.attendance}%</span>
              </div>
              <Progress value={subject.attendance} className="w-full" />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Fees */}
      <Card>
        <CardHeader>
          <CardTitle>Fees Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between mb-2">
            <span>Total Fees:</span>
            <span>${feesInfo.total}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Paid:</span>
            <span>${feesInfo.paid}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Due:</span>
            <span>${feesInfo.due}</span>
          </div>
          <div className="flex justify-between">
            <span>Due Date:</span>
            <span>{feesInfo.dueDate}</span>
          </div>
          <Progress value={(feesInfo.paid / feesInfo.total) * 100} className="w-full mt-4" />
        </CardContent>
      </Card>
    </div>
  );
};

export default StudentDashboard;