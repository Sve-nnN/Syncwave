import { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  addMonths,
  subMonths,
} from "date-fns";
import merge from "deepmerge";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Avatar,
  Badge,
  ScrollArea,
  Button,
  CardFooter,
} from "@material-tailwind/react";
import Chart from "react-apexcharts"; // Importa directamente el gráfico

// Mock data
const yearlyAttendanceData = Array.from({ length: 12 }, (_, index) => ({
  month: [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ][index],
  attendance: Math.floor(Math.random() * (100 - 90 + 1)) + 90,
}));

const attendanceStatusData = [
  { name: "Presente", value: 85 },
  { name: "Ausente", value: 10 },
  { name: "Tarde", value: 5 },
];

const COLORS = ["#4CAF50", "#F44336", "#FFC107"];

const employees = [
  { id: 1, name: "John Doe", status: "Presente" },
  { id: 2, name: "Jane Smith", status: "Ausente" },
  { id: 3, name: "Bob Johnson", status: "Tarde" },
];

const events = [
  {
    date: new Date(2024, 9, 25),
    employees: [
      { name: "John Doe", status: "present" },
      { name: "Jane Smith", status: "absent" },
    ],
  },
  {
    date: new Date(2024, 9, 26),
    employees: [{ name: "Bob Johnson", status: "late" }],
  },
];

const AttendanceCalendar = ({ days, currentMonth }) => {
  return (
    <Card>
      <CardHeader>
        <h6 className="text-lg font-semibold">Attendance Calendar</h6>
      </CardHeader>
      <CardBody>
        <div className="grid grid-cols-7 gap-2 text-center text-sm mb-2">
          {["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"].map((day) => (
            <div key={day} className="font-semibold">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {days.map((day) => {
            const dayEvents = events.find((event) =>
              isSameDay(event.date, day)
            );
            return (
              <div
                key={day.toString()}
                className={`min-h-[100px] p-2 border rounded-lg ${
                  isSameMonth(day, currentMonth)
                    ? "bg-white shadow-md"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                <time
                  dateTime={format(day, "yyyy-MM-dd")}
                  className="font-semibold text-sm"
                >
                  {format(day, "d")}
                </time>
                {dayEvents && (
                  <div className="mt-1">
                    <ScrollArea className="h-20">
                      {dayEvents.employees.map((employee, empIdx) => (
                        <div
                          key={empIdx}
                          className="flex items-center space-x-2 mb-1"
                        >
                          <Avatar
                            src={`https://via.placeholder.com/40?text=${employee.name[0]}`}
                            alt={employee.name}
                            className="h-8 w-8 hover:scale-105 transition-transform duration-200"
                          />
                          <Badge
                            color={
                              employee.status === "present"
                                ? "green"
                                : employee.status === "absent"
                                ? "red"
                                : "yellow"
                            }
                            className="text-xs"
                          >
                            {employee.status[0].toUpperCase()}
                          </Badge>
                        </div>
                      ))}
                    </ScrollArea>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </CardBody>
    </Card>
  );
};

const AreaChart = ({ height = 350, series, colors }) => {
  const chartOptions = {
    colors,
    chart: {
      height: height,
      type: "area",
      zoom: { enabled: false },
      toolbar: { show: false },
    },
    dataLabels: { enabled: false },
    legend: { show: false },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    grid: {
      show: true,
      borderColor: "#EEEEEE",
      strokeDashArray: 5,
      padding: {
        top: 5,
        right: 20,
      },
    },
    tooltip: {
      theme: "light",
    },
    yaxis: {
      labels: {
        style: {
          colors: "#757575",
          fontSize: "12px",
          fontWeight: 300,
        },
      },
    },
    xaxis: {
      labels: {
        style: {
          colors: "#757575",
          fontSize: "12px",
          fontWeight: 300,
        },
      },
    },
  };

  return (
    <Chart type="area" height={height} series={series} options={chartOptions} />
  );
};

const AttendanceDashboard = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const days = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });

  const previousMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Attendance Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/*<AttendanceCalendar days={days} currentMonth={currentMonth} />*/}
        <Card>
          <CardHeader>
            <Typography variant="h6">Yearly Attendance</Typography>
          </CardHeader>
          <CardBody>
            <AreaChart
              colors={["#4CAF50", "#2196F3"]}
              series={[
                {
                  name: "Asistencia",
                  data: yearlyAttendanceData.map((data) => data.attendance),
                },
              ]}
            />
          </CardBody>
          <CardFooter>
            <Typography variant="small">
              Comparación de asistencia anual
            </Typography>
          </CardFooter>
        </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <Typography variant="h6">Attendance Status</Typography>
          </CardHeader>
          <CardBody>
            <div className="space-y-4">
              {attendanceStatusData.map((status, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: COLORS[index] }}
                  />
                  <span className="ml-2">
                    {status.name}: {status.value}%
                  </span>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <Typography variant="h6">Employee Status</Typography>
          </CardHeader>
          <CardBody>
            <div className="space-y-4">
              {employees.map((employee) => (
                <div
                  key={employee.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center space-x-4">
                    <Avatar
                      src={`https://via.placeholder.com/40?text=${employee.name[0]}`}
                      alt={employee.name}
                      className="h-8 w-8 hover:scale-105 transition-transform duration-200"
                    />
                    <p className="font-medium">{employee.name}</p>
                  </div>
                  <Badge
                    color={
                      employee.status === "Presente"
                        ? "green"
                        : employee.status === "Ausente"
                        ? "red"
                        : "yellow"
                    }
                  >
                    {employee.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default AttendanceDashboard;
