const pdfData  = [
    /*1st year*/
    { name: "Physics", link: "https://drive.google.com/file/d/1t6It0GAX3PkqLtI2CvUIyVBQCB9ExJG_/view?usp=drivesdk" },
    { name: "Mathematics I", link: "https://drive.google.com/file/d/1ys1N-EqtMg6Nd34jJllXZvc8tifVEtda/view?usp=drivesdk" },
    { name: "Basic Mechanical Engineering", link: "https://drive.google.com/file/d/1gwNx1XPUwVUhdBM2VKsetvHCbOjrM9wm/view?usp=drivesdk" },
    { name: "Basic Civil & Engineering Mechanincs", link: "https://drive.google.com/file/d/1T52Z5lZzont23RfLkMJbJrGDf5c4UivK/view?usp=drivesdk" },
    { name: "Basic Computer Engineering", link: "https://drive.google.com/file/d/1cG3qynnhY_4sy5LES5NbdIBY8BpT5n1x/view?usp=drivesdk" },
    { name: "Chemistry", link: "https://drive.google.com/file/d/16Hr1c2oayad45Z1l5bxSiwl_qVmlJcW-/view?usp=drivesdk" },
    { name: "Mathmatics - II", link: "https://drive.google.com/file/d/1ll88oR-I3wG79AubJfFoMZBGHLiNdYZD/view?usp=drivesdk" },
    { name: "English For Communication", link: "https://drive.google.com/file/d/1V7VA_h2FDlt_GEIe1KYWQ80g_FHRiiyr/view?usp=drivesdk" },
    { name: "Basic Electrical And Electronics Engineering", link: "https://drive.google.com/file/d/1nOsmOlS_-zBzAjbnPlZidL_rMByJFREl/view?usp=drivesdk" },
    { name: "Engineering Graphics", link: "https://drive.google.com/file/d/1pQe29dKhuzWGZARmrck5ArdtdCBjv3tm/view?usp=drivesdk" },


    /*2year*/
    { name: "Energy & Environmental Engineering", link: "https://drive.google.com/file/d/1VhIFrQCitG4uXqyX8TGGDwpzqtpYEUDn/view?usp=drivesdk" },
    { name: "Discrete Structure", link: "https://drive.google.com/file/d/10yPntSkfzBXCpy3t61HCn-6TXrzrsyHQ/view?usp=drivesdk" },
    { name: "Data Structure", link: "https://drive.google.com/file/d/1kYbaw_rE7El3h6wiotd1a3GOH6NvxeO2/view?usp=drivesdk" },
    { name: "Digital Systems", link: "https://drive.google.com/file/d/1yG9ibgKOn7Z8B6CkT9kFnAk5cjvsJq85/view?usp=drivesdk" },
    { name: "Object Oriented Programming & methodology", link: "https://drive.google.com/file/d/13GR4J0oX0vYIFoStV-Cs8twM8as2jj0R/view?usp=drivesdk" },
    { name: "Mathmatics - III", link: "https://drive.google.com/file/d/1TYfTxx4SBwP1Eh2-dfC3pRHtp_xzBYtG/view?usp=drivesdk" },
    { name: "Analysis & design of ALgorithm", link: "https://drive.google.com/file/d/1nBKbseS9AF2ldYHxxhfWoHZ5C2FHzdxK/view?usp=drivesdk" },
    { name: "Software Engineering", link: "https://drive.google.com/file/d/1dudZd34HRvnxdWLSS04GfNBczjyrBSJX/view?usp=drivesdk" },
    { name: "Computer Organization & Architecture", link: "https://drive.google.com/file/d/1hZU-G1d3c7BJwMa0FjHmEFpQ5DFS6ASn/view?usp=drivesdk" },
    { name: "Operating Systems", link: "https://drive.google.com/file/d/1Wbc6m4XndCBeowi3RIIGrMRV2DYM1ADf/view?usp=drivesdk" },
    { name: "Technical Communication", link: "https://drive.google.com/file/d/1iNkpiE9cLDJagiQ0lXpwFwkQWJmA9JQc/view?usp=drivesdk" },
    { name: "Intro To Probability & Statistics", link: "https://drive.google.com/file/d/1KyEGZ3pJc2MAKoQNBaiv1yy9o6YrFL0e/view?usp=drivesdk" },
    { name: "Artificial Intelligence", link: "https://drive.google.com/file/d/1PwRtDOo94FxxsfNWRl2vjgsY48A9Azzs/view?usp=drivesdk" },
    { name: "Intro To Discrete Structure & Linear Algebra", link: "https://drive.google.com/file/d/1Q4Ok6zfb4Kjal0knW74TpmGLfa8btqjC/view?usp=drivesdk" },
    { name: "Machine Learning", link: "https://drive.google.com/file/d/1hX5Y5_b2mQFkAdi9rYqNyJw_99ntd23l/view?usp=drivesdk" },
    { name: "Digital Circuits & System", link: "https://drive.google.com/file/d/1yG9ibgKOn7Z8B6CkT9kFnAk5cjvsJq85/view?usp=drivesdk" },
    { name: "Knowledge Representation & Reasoning", link: "https://drive.google.com/file/d/1jlqTvj18C_FxxYrRxANHOZCgADzegyzw/view?usp=drivesdk" },



    /*3rdyear*/
    { name: "Data Analytics & Visualization", link: "https://drive.google.com/file/d/1e9gvB9duuWWUAOvAtcxwrqCAN6Oh_ahh/view?usp=drivesdk" },
    { name: "DBMS", link: "https://drive.google.com/file/d/1edW4UZW9LgDu335uTQO8uRRwdNEUF8zW/view?usp=drivesdk" },
    { name: "Theory Of Computation", link: "https://drive.google.com/file/d/1wM5YjfqhS37qcOAB5nCPLYgWTfQgUiA3/view?usp=drivesdk" },
    { name: "Compter Networks", link: "https://drive.google.com/file/d/1AeILVV0oBVR69_R-Tm_DecEz2ii7DpP8/view?usp=drivesdk" },
    { name: "NLP", link: "https://drive.google.com/file/d/1FD1TSSWZUhOpnuqb2xULCMN179GNm9b3/view?usp=drivesdk" },
    { name: "Deep Learning", link: "https://drive.google.com/file/d/1V93cWZcvEzcDPPRZnx2mKy9WwnJN-QxI/view?usp=drivesdk" },
    { name: "Cloud Computing", link: "https://drive.google.com/file/d/1UpjyOMVKO6tnlq1gXO_VglGE4LLvklQ2/view?usp=drivesdk" },
    { name: "Internet & Web Technology", link: "https://drive.google.com/file/d/1cTZHkrGYT-McAMiEGk_Ssyqcv5foRBbI/view?usp=drivesdk" },
    { name: "Compiler Design", link: "https://drive.google.com/file/d/1q9h5NSDDalpYYMfIyrCPX68ejbVBQAZG/view?usp=drivesdk" },
    { name: "Project Management", link: "https://drive.google.com/file/d/11lz6q9iHparp2EnJi1YrpXIHhon9fKP3/view?usp=drivesdk" },

];

export default pdfData;
