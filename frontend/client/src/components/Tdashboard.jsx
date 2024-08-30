import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card.jsx';
import { Progress } from '../components/ui/progress.jsx';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar.jsx';

const Tdashboard = () => {
  // Mock data - in a real application, this would come from an API or database
  const teacherInfo = {
    name: "Dr. John Smith",
    id: "TCH001",
    department: "Computer Science",
    yearsOfExperience: 10
  };

  const classSchedule = [
    { day: 'Monday', time: '09:00 AM - 11:00 AM', subject: 'Introduction to Programming' },
    { day: 'Tuesday', time: '02:00 PM - 04:00 PM', subject: 'Data Structures' },
    { day: 'Thursday', time: '10:00 AM - 12:00 PM', subject: 'Algorithms' },
    { day: 'Friday', time: '01:00 PM - 03:00 PM', subject: 'Database Systems' },
  ];

  const studentPerformance = [
    { class: 'Introduction to Programming', averageScore: 78 },
    { class: 'Data Structures', averageScore: 82 },
    { class: 'Algorithms', averageScore: 75 },
    { class: 'Database Systems', averageScore: 80 },
  ];

  const upcomingTasks = [
    { task: 'Grade Midterm Papers', dueDate: '2024-09-15' },
    { task: 'Prepare Lecture Slides', dueDate: '2024-09-18' },
    { task: 'Department Meeting', dueDate: '2024-09-20' },
    { task: 'Student Consultation Hours', dueDate: '2024-09-22' },
  ];

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Teacher Dashboard</h1>
      
      {/* Teacher Profile */}
      <Card>
        <CardHeader>
          <CardTitle>Teacher Profile</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center space-x-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src="/api/placeholder/100/100" alt={teacherInfo.name} />
            <AvatarFallback>{teacherInfo.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl font-semibold">{teacherInfo.name}</h2>
            <p>ID: {teacherInfo.id}</p>
            <p>Department: {teacherInfo.department}</p>
            <p>Experience: {teacherInfo.yearsOfExperience} years</p>
          </div>
        </CardContent>
      </Card>

      {/* Class Schedule */}
      <Card>
        <CardHeader>
          <CardTitle>Class Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th>Day</th>
                <th>Time</th>
                <th>Subject</th>
              </tr>
            </thead>
            <tbody>
              {classSchedule.map((class_, index) => (
                <tr key={index}>
                  <td>{class_.day}</td>
                  <td>{class_.time}</td>
                  <td>{class_.subject}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      {/* Student Performance */}
      <Card>
        <CardHeader>
          <CardTitle>Student Performance Overview</CardTitle>
        </CardHeader>
        <CardContent>
          {studentPerformance.map((performance, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between mb-1">
                <span>{performance.class}</span>
                <span>{performance.averageScore}%</span>
              </div>
              <Progress value={performance.averageScore} className="w-full" />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Upcoming Tasks */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Tasks</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {upcomingTasks.map((task, index) => (
              <li key={index} className="flex justify-between">
                <span>{task.task}</span>
                <span className="text-gray-500">{task.dueDate}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Tdashboard;