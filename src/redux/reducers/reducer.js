import { LOG_IN } from "../actions/action"

const initialState = {
    students : [
        {
          name: "Olaide Yusuf",
          pictur: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO-SCAyEOQVCBLmU60ITRMvK8_on9o63mmDg&s",
          class: "JSS 3 blue",
          specilization: "science",
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
          picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScEgrOhwLbzaE-19x8GdXCcfYPil44arh4TA&s",
          class: "JSS 2 gold",
          specilization: "science",
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
          picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVCpfMglhYc7GTk9Fndq5KqmDUfN0-zUWnCQ&s",
          class: "JSS 3 Red",
          specilization: "science",
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
          picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSONm7UKw4ef2NlvNvLfZrJoq8A6CyqwaR3A&s",
          class: "JSS 3 Yellow",
          specilization: "science",
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
      ]
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN : return {
            ...state,
        }
        default: return state
    }
}
export default userReducer