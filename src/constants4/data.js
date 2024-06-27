import { InboxOutlined } from "@mui/icons-material"
import { AccountCircle } from "@mui/icons-material"
import { Dashboard } from "@mui/icons-material"
export const data = {
    nav : [
        {
            id: 1,
            icon : "Dashboard" ,
            name : "Dashboard",
            link: "dashboard"
        },
        {
            id: 2,
            icon : "AccountCircle" ,
            name : "Profile",
            link: "profile"
        },
        {
            id: 3,
            icon : "Inbox" ,
            name : "My Results",
            link: "results"
        },
        {
            id: 4,
            icon : "SentimentVeryDissatisfied" ,
            name : "Outstanding Results",
            link: "failedresults"
        },
        {
            id: 5,
            icon : "LegendToggle" ,
            name : "CGPA",
            linlk: "CGPA"
        }
    ]
}
export const students = [
    {
      name: "Olaide Yusuf",
      email: "yusufolaide@gmail.com",
      password: "yusuf214",
      results: [
        { course: 'Math', test: 40, exam: 50 },
        { course: 'English', test: 35, exam: 55 },
        { course: 'Science', test: 45, exam: 50 },
        { course: 'Further Maths', test: 38, exam: 52 },
        { course: 'Physics', test: 25, exam: 55 },
        { course: 'Geography', test: 21, exam: 31 },
        { course: 'Data Processing', test: 15, exam: 22 },
        { course: 'Economics', test: 38, exam: 60 },
      ],
    },
    {
      name: "Babajide Awofeso",
      email: "babajideawofeso@gmail.com",
      password: "Babajide656",
      results: [
        { course: 'Math', test: 30, exam: 45 },
        { course: 'English', test: 23, exam: 47 },
        { course: 'Science', test: 35, exam: 52 },
        { course: 'Further Maths', test: 31, exam: 32 },
        { course: 'Physics', test: 25, exam: 23 },
        { course: 'Geography', test: 21, exam: 53 },
        { course: 'Data Processing', test: 23, exam: 44 },
        { course: 'Economics', test: 38, exam: 56 },
      ],
    },
    {
      name: "Onimisi Ajayi",
      email: "onimisiajayi@gmail.com",
      password: "Onimisi342",
      results: [
        { course: 'Math', test: 18, exam: 45 },
        { course: 'English', test: 33, exam: 46 },
        { course: 'Science', test: 22, exam: 35 },
        { course: 'Further Maths', test: 36, exam: 47 },
        { course: 'Physics', test: 26, exam: 53 },
        { course: 'Geography', test: 23, exam: 39 },
        { course: 'Data Processing', test: 22, exam: 27 },
        { course: 'Economics', test: 32, exam: 55 },
      ],
    },
    {
      name: "Nikki Omiyale",
      email: "nikkiomiyale@gmail.com",
      password: "Omiyale212",
      results: [
        { course: 'Math', test: 34, exam: 33 },
        { course: 'English', test: 23, exam: 17 },
        { course: 'Science', test: 41, exam: 40 },
        { course: 'Further Maths', test: 28, exam: 32 },
        { course: 'Physics', test: 29, exam: 33 },
        { course: 'Geography', test: 19, exam: 41 },
        { course: 'Data Processing', test: 22, exam: 18 },
        { course: 'Economics', test: 29, exam: 45 },
      ],
    }
  ];