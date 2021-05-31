// event - guestName (date)
// guestName (date)
// guestName

const photos = [
  {
    details: {
      guestName: "5th Anniversary Celebrations",
      date: "18th August, 2003",
      description: "",
      photosFolderName: "anniversary5",
    },
    photos: [
      { file: "1.jpg", caption: "Chief Guest : District Employment Officer" },
      { file: "2.jpg", caption: "Speech by Chief Guest and Director" },
      {
        file: "3.jpg",
        caption:
          "First Employment Recognition Certificate issued by OSS DTP Institure, to Ms. Latha By District Employment Officer Sri M. Appi Reddy garu",
      },
      {
        file: "4.jpg",
        caption: "Sd. Imambi - First Prize in Adobe PageMaker 7.0.1",
      },
      {
        file: "5.jpg",
        caption: "Syed Mujibunnisa - First Prize in Adobe PageMaker 7.0.1",
      },
      { file: "6.jpg", caption: "Sk. Nasreen - First Prize in CorelDRAW 11" },
      {
        file: "7.jpg",
        caption: "M. Tirupathi Rao - First Prize in Microsoft Word 2002",
      },
      {
        file: "8.jpg",
        caption: "N. Rambabu - First Prize in Adobe Photoshop 7",
      },
      {
        file: "9.jpg",
        caption: "Syed Kudush Rahman - First Prize in Adobe Photoshop 7",
      },
      { file: "10.jpg", caption: "B. Srinivas - A special Prize" },
    ],
  },
  {
    details: {
      guestName: "Sri K. Brahmaiah garu",
      date: "June, 2004",
      description:
        "Proprietor, Sri K. Brahmaiah, Proprietor, Sree Lakshmi Press, Guntur, visited our institute to present trophies to the winners of April month exams.",
      photosFolderName: "brahmaiah",
    },
    photos: [
      { file: "1.jpg", caption: "Director's Speech" },
      {
        file: "2.jpg",
        caption: "Sai Subrahmanyam - First Prize in CorelDRAW Basics",
      },
      { file: "3.jpg", caption: "K. Shankar - First Prize in CorelDRAW 12" },
      {
        file: "4.jpg",
        caption: "A. Satyanarayana - First Prize in Adobe Photoshop CS",
      },
      {
        file: "5.jpg",
        caption: "J.A. Swathi - First Prize in Computer Basics",
      },
      { file: "6.jpg", caption: "V. Anil Kumar - First Prize in CorelDRAW 12" },
      {
        file: "7.jpg",
        caption: "V. Anil Kumar - First Prize in PageMaker 7.0.1",
      },
      {
        file: "8.jpg",
        caption: "M. Durga Prasad - First Prize in Microsoft Office Word 2003",
      },
      {
        file: "9.jpg",
        caption: "P. Jhansi Madhuri - First Prize in PageMaker 7.0.1",
      },
      { file: "10.jpg", caption: "S. Ravi Teja - First Prize in CorelDRAW 12" },
      {
        file: "11.jpg",
        caption: "I. Sanjeev - First Prize in Computer Basics",
      },
      {
        file: "12.jpg",
        caption: "Shaik Shalu - First Prize in Adobe PageMaker 7.0.1",
      },
      { file: "13.jpg", caption: "Students at the time of Prize Distribution" },
    ],
  },
  {
    details: {
      guestName: "Sri Pulicherla Sambasiva Rao garu",
      date: "October, 2003",
      description:
        "Sri Pulicherla Samba Siva Rao, Lecturer, J.K.C. College, Guntur, visited our institute to present trophies to the winners of August 2003 month exams.",
      photosFolderName: "sambasivarao",
    },
    photos: [
      { file: "1.jpg", caption: "Speech by Sri Sambasiva Rao garu" },
      {
        file: "2.jpg",
        caption: "M.V.V.N. Pavan - First Prize in CorelDRAW 12",
      },
      {
        file: "3.jpg",
        caption: "M. Vasu - First Prize in Adobe PageMaker 7.0.1",
      },
    ],
  },
  {
    details: {
      guestName: "Sri Koteswara Rao garu",
      date: "June, 2004",
      description:
        "Sri Polisetty Koteswara Rao, Hardware Engineer, visited our institute to present trophies to the winners of June month exams.",
      photosFolderName: "koteswararaohar",
    },
    photos: [
      { file: "1.jpg", caption: "Director Speech" },
      {
        file: "2.jpg",
        caption: "N. Chandra Sekhar - First Prize in CorelDRAW 12",
      },
      {
        file: "3.jpg",
        caption: "M. Durga Prasad - First Prize in Adobe PageMaker 7.0.1",
      },
      { file: "4.jpg", caption: "Students" },
    ],
  },
  {
    details: {
      guestName: "Sri G.V.L.N. Sanjiva Rao garu",
      date: "September, 2003",
      description:
        "Sri Sanjiva Rao, Retired Head of the Department, Mathematics, AC College, Guntur, visited our institute to present trophies to the winners of September month exams.",
      photosFolderName: "sanjivarao",
    },
    photos: [
      { file: "1.jpg", caption: "Bh. Lalitha - First Prize in CorelDRAW 11" },
      {
        file: "2.jpg",
        caption: "R. Kiran Vara Prasad - First Prize in Adobe Photoshop 7",
      },
      {
        file: "3.jpg",
        caption: "M.V.V.N. Pavan Kumar - First Prize in Adobe PageMaker 7.0.1",
      },
      {
        file: "4.jpg",
        caption: "A.V. Phani Kumar - First Prize in CorelDRAW 11",
      },
    ],
  },
  {
    details: {
      guestName: "Sri Suchitra Srinivas garu",
      date: "November, 2003",
      description:
        "Sri Suchitra Srinivas, Suchitra Graphics, Guntur, visited our institute to present trophies to the winners of November 2003 month exams.",
      photosFolderName: "srinivassuc",
    },
    photos: [
      {
        file: "1.jpg",
        caption: "Bh. Lalitha - First Prize in PageMaker 7.0.1",
      },
      {
        file: "2.jpg",
        caption: "A. Meena Kumari - First Prize in Microsoft Office Word 2002",
      },
      {
        file: "3.jpg",
        caption: "Sk. Abibuddin - First Prize in Adobe Photoshop CS",
      },
      {
        file: "4.jpg",
        caption: "A.V. Phani Kumar - First Prize in PageMaker 7.0.1",
      },
      {
        file: "5.jpg",
        caption: "R. Kiran Vara Prasad - First Prize in CorelDRAW 11",
      },
    ],
  },
  {
    details: {
      guestName: "Mr. & Mrs. Sudharsan Srinivas garu",
      date: "December, 2003",
      description:
        "Mr. & Mrs. Sudharsan Srinivas, Sudharsan Printers & Graphics, Guntur, visited our institute to present trophies to the winners of December month exams.",
      photosFolderName: "srinivassud",
    },
    photos: [
      {
        file: "1.jpg",
        caption: "T. Rajesh - First Prize in Adobe Photoshop 7",
      },
      {
        file: "2.jpg",
        caption: "M. Malleswari - First Prize in Adobe PageMaker 7.0.1",
      },
      {
        file: "3.jpg",
        caption:
          "M.V.V.N. Pavan Kumar - First Prize in Microsoft Office Word 2002",
      },
      { file: "4.jpg", caption: "V. Anil Kumar - First Prize in CorelDRAW 11" },
      {
        file: "5.jpg",
        caption: "M.V.V.N. Pavan Kumar - First Prize in Special Prize",
      },
    ],
  },
  {
    details: {
      guestName: "Dr. L. Janarhana Rao garu and Mrs. L. Vanajakshi",
      date: "9th March, 2004",
      description:
        "Mr. & Mrs. Janardhana Rao Lanka inagurated our new building, OSS Nilayam.",
      photosFolderName: "ossnilayam",
    },
    photos: [
      {
        file: "1.jpg",
        caption:
          "OSS Nilayam (New Building), Inauguration by Dr. L. Janardhana Rao garu",
      },
      {
        file: "2.jpg",
        caption: "Dr. L. Janardhana Rao garu entering to the Office",
      },
      { file: "3.jpg", caption: "Smt. L. Vanajakshi opening the Class Room" },
      {
        file: "4.jpg",
        caption:
          "A small boque to the Madam by Vanga Sasidhar, Managing Partner, OSS Computers",
      },
      { file: "5.jpg", caption: "Speech by Dr. Janardhana Rao garu" },
      {
        file: "6.jpg",
        caption: "Speech by Vanga Sasidhar, Managing Partner, OSS Computers",
      },
    ],
  },
  {
    details: {
      guestName: "6th Anniversary Celebrations by Sri S.S.R. Anjaneyulu",
      date: "18th August, 2004",
      description:
        "Mr. S.S.R. Anjaneyulu (Proprietor, Citizens Printers, Guntur) came for 6th Anniversary Celebrations on 17th September 2004.",
      photosFolderName: "anniversary6",
    },
    photos: [
      { file: "1.jpg", caption: "Honourable Guest Sri S.S.R. Anjaneyulu" },
      { file: "2.jpg", caption: "V.S. Reddy, Partner, OSS Computers" },
      { file: "3.jpg", caption: "Students" },
      {
        file: "4.jpg",
        caption: "A small gift to G. Sushma, Instructor, OSS Computers",
      },
      {
        file: "5.jpg",
        caption: "G. Satyanarayana - First Prize in Adobe Photoshop CS",
      },
      { file: "6.jpg", caption: "Students" },
      {
        file: "7.jpg",
        caption: "J. Sridevi - First Prize in Microsoft Office Word 2003",
      },
      {
        file: "8.jpg",
        caption: "Sk. Md. Khasim - First Prize in CorelDRAW 12",
      },
      {
        file: "9.jpg",
        caption: "M. Rajya Lakshmi - First Prize in C Programming Language",
      },
      { file: "10.jpg", caption: "T. Srikanth - First Prize in CorelDRAW 12" },
      {
        file: "11.jpg",
        caption: "Y. Kiran Kumar - First Prize in Adobe PageMaker 7.0.1",
      },
      {
        file: "12.jpg",
        caption: "Ch. Sunil Kumar - First Prize in Computer Basics",
      },
      {
        file: "13.jpg",
        caption: "G. Satyanarayana - First Prize in Adobe PageMaker 7.0.1",
      },
      { file: "14.jpg", caption: "I Ramadivi - First Prize in CorelDRAW 12" },
      {
        file: "15.jpg",
        caption: "M. Nagavara Lakshmi - First Prize in Adobe Potoshop CS",
      },
      {
        file: "16.jpg",
        caption: "R. Koteswara Rao - First Prize in Computer Basics",
      },
      {
        file: "17.jpg",
        caption: "Sk. Moula Bakash - First Prize in Adobe PageMaker 7.0.1",
      },
    ],
  },
  {
    details: {
      guestName: "Sri Y. Venkata Reddy garu",
      date: "October, 2004",
      description:
        "Sri Venkata Reddy Yennam (Grad C.W.A., F.C.A., DISA (ICAI), Venkata Reddy & CO Chartered Accountants, Guntur) visited our institute to present trophies to the winners of 2004 September and October months exams.",
      photosFolderName: "venkatareddy",
    },
    photos: [
      { file: "1.jpg", caption: "Director Speech" },
      { file: "2.jpg", caption: "Guest Speech" },
      {
        file: "3.jpg",
        caption: "R. Krishna Koteswara Rao - First Prize in CorelDRAW 12",
      },
      {
        file: "4.jpg",
        caption: "M. Rajya Lakshmi - First Prize in Adobe PageMaker 7.0.1",
      },
      {
        file: "5.jpg",
        caption: "P. Sobhana Krishna - First Prize in Computer Basics",
      },
      {
        file: "6.jpg",
        caption: "Y. Supreeta Guptha - First Prize in Photoshop CS",
      },
      {
        file: "7.jpg",
        caption:
          "R. Krishna Koteswara Rao - First Prize in Adobe PageMaker 7.0.1",
      },
      { file: "8.jpg", caption: "P. Madhavi - First Prize in Computer Basics" },
      {
        file: "9.jpg",
        caption: "B. Purna Srinath - First Prize in CorelDRAW 12",
      },
      {
        file: "10.jpg",
        caption: "T. Srikanth - First Prize in Microsoft Office Word 2003",
      },
      { file: "11.jpg", caption: "A small presentation to Honourable Guest" },
    ],
  },
  {
    details: {
      guestName: "Sri P. Rambabu garu",
      date: "December, 2004",
      description:
        "Physical Education Trainer, Government Polytechnical College, Ongole",
      photosFolderName: "rambabu",
    },
    photos: [
      {
        file: "1.jpg",
        caption: "osscomputers.com Website Inauguration by Hon'ble Guest",
      },
      { file: "2.jpg", caption: "Speech by Hon'ble Guest" },
      { file: "3.jpg", caption: "B. Sarala - First Prize in Photoshop CS" },
      {
        file: "4.jpg",
        caption: "B. Purna Srikanth - First Prize in Adobe PageMaker 7.0.1",
      },
      {
        file: "5.jpg",
        caption: "J. Eswar - First Prize in Microsoft Word 2003",
      },
      { file: "6.jpg", caption: "T. Srilakshmi - First Prize in CorelDRAW 12" },
      {
        file: "7.jpg",
        caption: "T. Ravi Kumar - First Prize in Computer Basics",
      },
      { file: "8.jpg", caption: "Speech by Director" },
    ],
  },
  {
    details: {
      guestName: "Sri Ram Kumar garu",
      date: "Jan, 2005",
      description:
        "Sri V. Ram Kumar, Proprietor, Sri Sai Graphics, Guntur, visited our institute to present trophies to the winners of January month exams.",
      photosFolderName: "ramkumar",
    },
    photos: [
      { file: "1.jpg", caption: "Speech by Chief Guest Sri Ram Kumar garu" },
      { file: "2.jpg", caption: "B. Bennimma - First Prize in CorelDRAW " },
      { file: "3.jpg", caption: "K. Srinivas - First Prize in CorelDRAW 12" },
      {
        file: "4.jpg",
        caption: "P. Sobhana Krishna - First Prize in Microsoft Excel 2003",
      },
      {
        file: "5.jpg",
        caption: "G. China Venkaiah - First Prize in Adobe Photoshop CS",
      },
      { file: "6.jpg", caption: "Students" },
      {
        file: "7.jpg",
        caption: "Venkata Ramana - First Prize in CorelDRAW 12",
      },
      {
        file: "8.jpg",
        caption: "B. Vijaya Krishna - First Prize in Microsoft Word 2003",
      },
      { file: "9.jpg", caption: "OSS Material set presented to Chief Guest" },
    ],
  },
  {
    details: {
      guestName: "Sri P.J. Samuel garu",
      date: "February, 2005",
      description:
        "Sri P.J. Samuel, Proprietor, Shrushtee Graphics, Guntur, visited our institute to present trophies to the winners of February month exams.",
      photosFolderName: "samuel",
    },
    photos: [
      { file: "1.jpg", caption: "Speech by Director" },
      { file: "2.jpg", caption: "Guest Speech" },
      {
        file: "3.jpg",
        caption: "M.N.V. Aditya - First Prize in Microsoft Excel 2003",
      },
      {
        file: "4.jpg",
        caption: "K. Bharathi - First Prize in Adobe Photoshop CS",
      },
      {
        file: "5.jpg",
        caption: "K. Srinivasa Rao - First Prize in Adobe PageMaker 7.0.1",
      },
      {
        file: "6.jpg",
        caption: "S. Hemalatha - First Prize in Microsoft Word 2003",
      },
      { file: "7.jpg", caption: "Students" },
      { file: "8.jpg", caption: "Students" },
      {
        file: "9.jpg",
        caption: "L. Veeranjaneya Prasad - First Prize in CorelDRAW 12",
      },
      { file: "10.jpg", caption: "OSS Material Set present to Guest" },
    ],
  },
  {
    details: {
      guestName: "Sri Kishore garu",
      date: "March, 2005",
      description:
        "Sri Kishore, Proprietor, Raja Rajeswary Graphics, Guntur, visited our institute to present trophies to the winners of March month exams.",
      photosFolderName: "kishore",
    },
    photos: [
      {
        file: "1.jpg",
        caption: "A. Sridhar - First Prize in Microsoft Word 2003",
      },
      {
        file: "2.jpg",
        caption: "A. Sridhar - Also First Prize in Microsoft Excel 2003)",
      },
      {
        file: "3.jpg",
        caption: "A. Venkata Ramana - First Prize in Adobe Photoshop CS",
      },
      {
        file: "4.jpg",
        caption:
          "M. Rajya Lakshmi - First Prize in Fundamentals and Internet Concepts",
      },
      { file: "5.jpg", caption: "Students" },
    ],
  },
  {
    details: {
      guestName: "Sri Gopi Chand garu",
      date: "April, 2005",
      description:
        "Sri Gopichand, Principal, Sri Satya Sai Degree College, Tadikonda, visited our institute to present trophies to the winners of April month exams.",
      photosFolderName: "gopichand",
    },
    photos: [
      { file: "1.jpg", caption: "Guest Speech" },
      { file: "2.jpg", caption: "Anuradha" },
      { file: "3.jpg", caption: "K. Bharathi" },
      { file: "4.jpg", caption: "Sravanthi" },
      { file: "5.jpg", caption: "M. Rajya Lakshmi" },
      { file: "6.jpg", caption: "A. Sridhar" },
      { file: "7.jpg", caption: "Purna Srinath" },
      { file: "8.jpg", caption: "#" },
      { file: "9.jpg", caption: "Students" },
    ],
  },
  {
    details: {
      guestName: "Sri Creative Prasad garu",
      date: "May, 2005",
      description:
        "Sri Creative Prasad, Proprietor, Creative Graphics, visited our institute to present trophies to the winners of May month exams.",
      photosFolderName: "prasadcre",
    },
    photos: [
      { file: "1.jpg", caption: "Speech by Director" },
      { file: "2.jpg", caption: "#Name not available" },
      { file: "3.jpg", caption: "Sravanthi" },
      { file: "4.jpg", caption: "#" },
      { file: "5.jpg", caption: "A small pesentation to Guest" },
    ],
  },
  {
    details: {
      guestName: "Sri G. Prasad garu",
      date: "May, 2006",
      description:
        "Prof. G. Prasad (Asst. Registrar, Acharya Nagarjunja University, Nagarjuna Nagar, Guntur) visited our institute to present trophies to the winners of May month exams.",
      photosFolderName: "prasadg",
    },
    photos: [
      { file: "1.jpg", caption: "Director Speech" },
      { file: "2.jpg", caption: "#" },
      { file: "3.jpg", caption: "#" },
      { file: "4.jpg", caption: "#" },
      { file: "5.jpg", caption: "#" },
      { file: "6.jpg", caption: "Students" },
      { file: "7.jpg", caption: "Momento to Guest" },
    ],
  },
  {
    details: {
      guestName: "Sri Kanna Reddy garu",
      date: "July, 2006",
      description:
        "Sri Kanna Reddy (Principal, Rama Krishna Residential College, Gujjangundla, Guntur) visited our institute to present trophies to the winners of July month exams.",
      photosFolderName: "kannareddy",
    },
    photos: [
      { file: "1.jpg", caption: "Director Speech" },
      { file: "2.jpg", caption: "Projector Class" },
      { file: "3.jpg", caption: "Projector Class" },
      { file: "4.jpg", caption: "Speech by Guest" },
      { file: "5.jpg", caption: "#" },
      { file: "6.jpg", caption: "#" },
      { file: "7.jpg", caption: "#" },
      { file: "8.jpg", caption: "#" },
      { file: "9.jpg", caption: "#" },
      { file: "10.jpg", caption: "#" },
      { file: "11.jpg", caption: "Students" },
      { file: "12.jpg", caption: "Momento to Guest" },
    ],
  },
  {
    details: {
      guestName: "Sri Chaitanya and Bhaskar garu",
      description: "Proprietors, Prajavani Graphics, 2/5, Brodipet, Guntur",
      photosFolderName: "chaitanya",
    },
    photos: [
      { file: "1.jpg", caption: "Director Speech" },
      { file: "2.jpg", caption: "Guest Speech" },
      { file: "3.jpg", caption: "#" },
      { file: "4.jpg", caption: "#" },
      { file: "5.jpg", caption: "#" },
      { file: "6.jpg", caption: "#" },
      { file: "7.jpg", caption: "Students" },
      { file: "8.jpg", caption: "Momento to Guests" },
    ],
  },
  {
    details: {
      guestName: "Sri K. Chandramouli garu",
      date: "November, 2004",
      description:
        "Assistant Professsor, Civil Engineering, RVR & JC College Engineering, Chowdavaram, Guntur",
      photosFolderName: "chandramouli",
    },
    photos: [
      { file: "1.jpg", caption: "Director Speech" },
      { file: "2.jpg", caption: "Speech by Guest" },
      { file: "3.jpg", caption: "J. Eswar (Adobe Photoshop CS)" },
      { file: "4.jpg", caption: "K. Anuradha Devi (Adobe PageMaker 7.0.1)" },
      {
        file: "5.jpg",
        caption: "Ch. Venkata Krishna (Microsoft Office Excel 2003)",
      },
      { file: "6.jpg", caption: "Students" },
      { file: "7.jpg", caption: "OSS Books presented to Guest" },
    ],
  },
  {
    details: {
      guestName: "Dr. G. Ranga Rao garu",
      date: "20th November, 2008",
      description: "Retired Director, Bharat Scouts and Guides, New Delhi",
      photosFolderName: "anniversary10",
    },
    photos: [
      { file: "1.jpg", caption: "Speech by Chief Guest" },
      {
        file: "2.jpg",
        caption:
          "Projector Class inauguration by Chief Guest Dr. Ranga Rao garu",
      },
      { file: "3.jpg", caption: "J. Speech by Director" },
      { file: "4.jpg", caption: "#" },
      { file: "5.jpg", caption: "#" },
      { file: "6.jpg", caption: "#" },
      { file: "7.jpg", caption: "#" },
      { file: "8.jpg", caption: "#" },
      { file: "9.jpg", caption: "#" },
      { file: "10.jpg", caption: "#" },
      { file: "11.jpg", caption: "#" },
      { file: "12.jpg", caption: "#" },
      { file: "13.jpg", caption: "#" },
      { file: "14.jpg", caption: "#" },
      { file: "15.jpg", caption: "A small Momento to Chief Guest" },
    ],
  },
  {
    details: {
      guestName: "Sri Lanka Pavan Kumar garu",
      description: "Software Engineer, Apple, California, USA",
      photosFolderName: "pavan",
    },
    photos: [
      { file: "1.jpg", caption: "Director Speech" },
      { file: "2.jpg", caption: "Guest Speech" },
      { file: "3.jpg", caption: "#" },
      { file: "4.jpg", caption: "#" },
      { file: "5.jpg", caption: "#" },
      { file: "6.jpg", caption: "#" },
      { file: "7.jpg", caption: "Sambasiva Rao" },
      { file: "8.jpg", caption: "Students" },
    ],
  },
  {
    details: {
      guestName: "Sri Prasad garu",
      description: "Retired Marketing Executive",
      photosFolderName: "prasadexe",
    },
    photos: [
      { file: "1.jpg", caption: "Director Speech" },
      { file: "2.jpg", caption: "Guest Speech" },
      {
        file: "3.jpg",
        caption: "Prasad, Principal, IIT College, Kannavarithota, Guntur",
      },
      { file: "4.jpg", caption: "B. Pavani" },
      { file: "5.jpg", caption: "B. Pavani (getting one more prize)" },
      {
        file: "6.jpg",
        caption: "B. Pavani (A special prize by Hon'ble Guest Prasad garu ",
      },
      { file: "7.jpg", caption: "Vidya, Instructor, OSS Computers" },
      { file: "8.jpg", caption: "#" },
      { file: "9.jpg", caption: "#" },
      { file: "10.jpg", caption: "#" },
      { file: "11.jpg", caption: "Vanga Srikantha Reddy" },
      { file: "12.jpg", caption: "#" },
      { file: "13.jpg", caption: "Students" },
    ],
  },
  {
    details: {
      guestName: "Sri Punna Reddy garu",
      description: "Retired Mandal Development Officer",
      photosFolderName: "punnareddy",
    },
    photos: [
      { file: "1.jpg", caption: "Director Speech" },
      { file: "2.jpg", caption: "Speech by Guest" },
      { file: "3.jpg", caption: "#" },
      { file: "4.jpg", caption: "#" },
      { file: "5.jpg", caption: "#" },
      { file: "6.jpg", caption: "#" },
      { file: "7.jpg", caption: "#" },
    ],
  },
  {
    details: {
      guestName: "Sri Ramesh garu",
      description: "Marketing Executive",
      photosFolderName: "ramesh",
    },
    photos: [
      { file: "1.jpg", caption: "Director Speech" },
      { file: "2.jpg", caption: "Guest Speech" },
      { file: "3.jpg", caption: "#" },
      { file: "4.jpg", caption: "#" },
      { file: "5.jpg", caption: "#" },
    ],
  },
  {
    details: {
      guestName: "Ramesh garu",
      description: "Ready to go MS studies in Australia, ",
      photosFolderName: "rameshaus",
    },
    photos: [
      { file: "1.jpg", caption: "Sumathi" },
      { file: "2.jpg", caption: "Sumathi getting another Prize" },
      { file: "3.jpg", caption: "#" },
      { file: "4.jpg", caption: "#" },
      { file: "5.jpg", caption: "#" },
      { file: "6.jpg", caption: "#" },
      { file: "7.jpg", caption: "#" },
      { file: "8.jpg", caption: "#" },
      { file: "9.jpg", caption: "Students" },
      { file: "10.jpg", caption: "Students" },
      { file: "11.jpg", caption: "A small presentation to Guest" },
    ],
  },
  {
    details: {
      guestName: "Sri Naveen garu",
      description: "Head of the Department, T.J.P.S. College, Guntur,",
      photosFolderName: "naveen",
    },
    photos: [
      { file: "1.jpg", caption: "Director Speech" },
      { file: "2.jpg", caption: "Guest Speech" },
      { file: "3.jpg", caption: "Sumathi" },
      { file: "4.jpg", caption: "Sumathi getting another Prize" },
      { file: "5.jpg", caption: "Sumathi getting another Prize" },
      { file: "6.jpg", caption: "#" },
      { file: "7.jpg", caption: "#" },
      { file: "8.jpg", caption: "#" },
      { file: "9.jpg", caption: "#" },
      { file: "10.jpg", caption: "#" },
      { file: "11.jpg", caption: "#" },
      { file: "12.jpg", caption: "#" },
      { file: "13.jpg", caption: "#" },
      { file: "14.jpg", caption: "#" },
      { file: "15.jpg", caption: "#" },
      { file: "16.jpg", caption: "#" },
      { file: "17.jpg", caption: "#" },
      { file: "18.jpg", caption: "#" },
      { file: "19.jpg", caption: "#" },
      { file: "20.jpg", caption: "#" },
      { file: "21.jpg", caption: "#" },
      { file: "22.jpg", caption: "#" },
      { file: "23.jpg", caption: "#" },
      { file: "24.jpg", caption: "#" },
      { file: "25.jpg", caption: "#" },
      { file: "26.jpg", caption: "#" },
      { file: "27.jpg", caption: "Students" },
      { file: "28.jpg", caption: "Students" },
      { file: "29.jpg", caption: "Students" },
      { file: "30.jpg", caption: "Students" },
      { file: "31.jpg", caption: "Momento to Guest" },
    ],
  },
  {
    details: {
      guestName: "Sri Bhaskar garu",
      description: "Principal, GSR Junior College, Guntur",
      photosFolderName: "bhaskar",
    },
    photos: [
      { file: "1.jpg", caption: "#" },
      { file: "2.jpg", caption: "#" },
      { file: "3.jpg", caption: "#" },
      { file: "4.jpg", caption: "#" },
      { file: "5.jpg", caption: "#" },
      { file: "6.jpg", caption: "#" },
      { file: "7.jpg", caption: "#" },
      { file: "8.jpg", caption: "#" },
      { file: "9.jpg", caption: "#" },
      { file: "10.jpg", caption: "#" },
      { file: "11.jpg", caption: "#" },
      { file: "12.jpg", caption: "#" },
      { file: "13.jpg", caption: "#" },
      { file: "14.jpg", caption: "#" },
      { file: "15.jpg", caption: "#" },
      { file: "16.jpg", caption: "#" },
      { file: "17.jpg", caption: "#" },
      { file: "18.jpg", caption: "#" },
      { file: "19.jpg", caption: "#" },
      { file: "20.jpg", caption: "#" },
    ],
  },
  {
    details: {
      guestName: "Sri Venkata Rao garu",
      date: "June, 2008",
      description: "Master",
      photosFolderName: "venkatarao",
    },
    photos: [
      { file: "1.jpg", caption: "Guest Speech" },
      { file: "2.jpg", caption: "#" },
      { file: "3.jpg", caption: "#" },
      { file: "4.jpg", caption: "#" },
      { file: "5.jpg", caption: "#" },
      { file: "6.jpg", caption: "#" },
      { file: "7.jpg", caption: "#" },
      { file: "8.jpg", caption: "#" },
      { file: "9.jpg", caption: "#" },
      { file: "10.jpg", caption: "Students" },
      { file: "11.jpg", caption: "A Momento to Guest" },
    ],
  },
  {
    details: {
      guestName: "Sri Koteswara Rao garu",
      description: "Principal, Siva Electronics, 4/9, Bradipet, Guntur",
      photosFolderName: "koteswararaosiva",
    },
    photos: [
      { file: "1.jpg", caption: "Guest Speech" },
      { file: "2.jpg", caption: "#" },
      { file: "3.jpg", caption: "#" },
      { file: "4.jpg", caption: "#" },
      { file: "5.jpg", caption: "#" },
      { file: "6.jpg", caption: "#" },
      { file: "7.jpg", caption: "#" },
      { file: "8.jpg", caption: "#" },
      { file: "9.jpg", caption: "#" },
      { file: "10.jpg", caption: "#" },
      { file: "11.jpg", caption: "#" },
      { file: "12.jpg", caption: "A momento to Guest" },
    ],
  },
  {
    details: {
      guestName: "Sri Desu Sridhar garu",
      description:
        "Proprietor, Share Marketing Center, 5/1, Arundelpet, Guntur",
      photosFolderName: "sridhar",
    },
    photos: [
      { file: "1.jpg", caption: "Guest Speech" },
      { file: "2.jpg", caption: "#" },
      { file: "3.jpg", caption: "#" },
      { file: "4.jpg", caption: "#" },
      { file: "5.jpg", caption: "#" },
      { file: "6.jpg", caption: "#" },
      { file: "7.jpg", caption: "#" },
      { file: "8.jpg", caption: "#" },
      { file: "9.jpg", caption: "#" },
      { file: "10.jpg", caption: "Students" },
      { file: "11.jpg", caption: "A momento to Guest" },
    ],
  },
  {
    details: {
      guestName: "Sri Sudhakar garu",
      description:
        "Assistant Manager, State Bank of Travencore, Old Club Road, Guntur",
      photosFolderName: "sudhakar",
    },
    photos: [
      { file: "1.jpg", caption: "Director Speech" },
      { file: "2.jpg", caption: "Guest Speech" },
      { file: "3.jpg", caption: "#" },
      { file: "4.jpg", caption: "#" },
      { file: "5.jpg", caption: "#" },
      { file: "6.jpg", caption: "#" },
      { file: "7.jpg", caption: "Sankar" },
      { file: "8.jpg", caption: "#" },
      { file: "9.jpg", caption: "Greetings to Director" },
    ],
  },
  {
    details: {
      guestName: "Sri Yella Reddy garu",
      description: "Public Health Officer, Municipal Corporation, Guntur",
      photosFolderName: "yellareddy",
    },
    photos: [
      { file: "1.jpg", caption: "Guest Speech" },
      { file: "2.jpg", caption: "#" },
      { file: "3.jpg", caption: "#" },
      { file: "4.jpg", caption: "#" },
      { file: "5.jpg", caption: "#" },
      { file: "6.jpg", caption: "#" },
    ],
  },
  {
    details: {
      guestName: "Tabitha garu",
      description:
        "1st Rank Holder from IGNO University and get the Prize from India Vice-President",
      photosFolderName: "tabitha",
    },
    photos: [
      { file: "1.jpg", caption: "Director Speech" },
      { file: "2.jpg", caption: "Guest Speech" },
      { file: "3.jpg", caption: "#" },
      { file: "4.jpg", caption: "#" },
      { file: "5.jpg", caption: "#" },
      { file: "6.jpg", caption: "#" },
      { file: "7.jpg", caption: "#" },
      { file: "8.jpg", caption: "#" },
      { file: "9.jpg", caption: "A momento to Guest" },
    ],
  },
];
