 function list(){
    const datesList = [
      { 
        id: 1,
        date: new Date().setDate(new Date().getDate() - 2),
        appointments: [
          {
            startTime: '08:00',
            endTime: '09:00',
            subject: 'Test 1',
            Description: 'This is a test description'
          },
          {
            startTime: '09:00',
            endTime: '10:00',
            subject: 'Test 1',
            Description: 'This is a test description'
          },
          {
            startTime: '12:00',
            endTime: '13:00',
            subject: 'Test 1',
            Description: 'This is a test description'
          },
          {
            startTime: '15:00',
            endTime: '19:00',
            subject: 'Test 1',
            Description: 'This is a test description'
          },
          {
            startTime: '20:00',
            endTime: '21:00',
            subject: 'Test 1',
            Description: 'This is a test description'
          },
        ]
      },
      { 
        id: 2,
        date: new Date().setDate(new Date().getDate() - 1),
        appointments: [
          {
            startTime: '08:00',
            endTime: '09:00',
            subject: 'Test 1',
            Description: 'This is a test description'
          },
          {
            startTime: '09:00',
            endTime: '10:00',
            subject: 'Test 1',
            Description: 'This is a test description'
          },
          {
            startTime: '12:00',
            endTime: '13:00',
            subject: 'Test 1',
            Description: 'This is a test description'
          },
          {
            startTime: '15:00',
            endTime: '19:00',
            subject: 'Test 1',
            Description: 'This is a test description'
          },
          {
            startTime: '20:00',
            endTime: '21:00',
            subject: 'Test 1',
            Description: 'This is a test description'
          },
        ]
      },
      { 
        id: 3,
        date: new Date(),
        appointments: [
          {
            startTime: '08:00',
            endTime: '09:00',
            subject: 'Test 1',
            Description: 'This is a test description'
          },
          {
            startTime: '09:00',
            endTime: '10:00',
            subject: 'Test 1',
            Description: 'This is a test description'
          },
          {
            startTime: '12:00',
            endTime: '13:00',
            subject: 'Test 1',
            Description: 'This is a test description'
          },
          {
            startTime: '15:00',
            endTime: '19:00',
            subject: 'Test 1',
            Description: 'This is a test description'
          },
          {
            startTime: '20:00',
            endTime: '21:00',
            subject: 'Test 1',
            Description: 'This is a test description'
          },
        ]
      },
      { 
        id: 4,
        date: new Date().setDate(new Date().getDate() + 1),
        appointments: [
          {
            startTime: '08:00',
            endTime: '09:00',
            subject: 'Test 1',
            Description: 'This is a test description'
          },
          {
            startTime: '09:00',
            endTime: '10:00',
            subject: 'Test 1',
            Description: 'This is a test description'
          },
          {
            startTime: '12:00',
            endTime: '13:00',
            subject: 'Test 1',
            Description: 'This is a test description'
          },
          {
            startTime: '15:00',
            endTime: '19:00',
            subject: 'Test 1',
            Description: 'This is a test description'
          },
          {
            startTime: '20:00',
            endTime: '21:00',
            subject: 'Test 1',
            Description: 'This is a test description'
          },
        ]
      },
      { 
        id: 5,
        date: new Date().setDate(new Date().getDate() + 2),
        appointments: [
          {
            startTime: '08:00',
            endTime: '09:00',
            subject: 'Test 1',
            Description: 'This is a test description'
          },
          {
            startTime: '09:00',
            endTime: '10:00',
            subject: 'Test 1',
            Description: 'This is a test description'
          },
          {
            startTime: '12:00',
            endTime: '13:00',
            subject: 'Test 1',
            Description: 'This is a test description'
          },
          {
            startTime: '15:00',
            endTime: '19:00',
            subject: 'Test 1',
            Description: 'This is a test description'
          },
          {
            startTime: '20:00',
            endTime: '21:00',
            subject: 'Test 1',
            Description: 'This is a test description'
          },
        ]
      },
    ];
    return datesList;
 }

 module.exports.List = list;