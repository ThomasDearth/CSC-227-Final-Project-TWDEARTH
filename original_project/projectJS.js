function generate_bulleted_list(input_str) {
    input_str = input_str.split("\n");
    document.write("<ul>");
    for(let x = 0; x < input_str.length; x++) {
        document.write("<li>" + input_str[x] + "</li>");
    }
    document.write("</ul>");
}

function reformat_date(date_str) {
    date_str.split("-");
    return date_str[1] + " " + date_str[2] + ", " + date_str[0];
}

function generate_resume() {
    email = document.getElementById("form_email").value;
    if (email === "") {
        alert("Please enter an email address.");
    } else {
        fullname = document.getElementById("form_name").value;
        city = document.getElementById("form_city").value;
        state = document.getElementById("form_state").value;
        zipcode = document.getElementById("form_zipcode").value;
        phonenum = document.getElementById("form_phone_num").value;
        linkedin = document.getElementById("form_linkedin").value;
        website = document.getElementById("form_website").value;

        job_skills = document.getElementById("form_job_skills").value;
        writing_skills = document.getElementById("form_writing_skills").value;
        work_ethic = document.getElementById("form_work_ethic").value;
        technical_skills = document.getElementById("form_technical_skills").value;
        languages = document.getElementById("form_languages").value;

        education = document.getElementById("form_education").value;

        emp_date_1 = reformat_date(document.getElementById("form_date_1").value);
        emp_end_1 = reformat_date(document.getElementById("form_date_1_fin").value);
        emp_loc_1 = document.getElementById("form_work_loc_1").value;
        emp_date_2 = reformat_date(document.getElementById("form_date_2").value);
        emp_end_2 = reformat_date(document.getElementById("form_date_2_fin").value);
        emp_loc_2 = document.getElementById("form_work_loc_2").value;
        emp_date_3 = reformat_date(document.getElementById("form_date_3").value);
        emp_end_3 = reformat_date(document.getElementById("form_date_3_fin").value);
        emp_loc_3 = document.getElementById("form_work_loc_3").value;

        references = document.getElementById("form_references").value;

        document.write("<h1>" + fullname + "</h1>");
        document.write("<p>" + city + ", " + state + zipcode + "<br>" +
            phonenum + "<br>" +
            email + "<br>" +
            linkedin + "<br>" +
            website + "</p><hr>");
        
        document.write("<h3>Job Skills:</h3>");
        generate_bulleted_list(job_skills);
        document.write("<h3>Writing Skills</h3>");
        generate_bulleted_list(writing_skills);
        document.write("<h3>Work Ethic</h3>");
        generate_bulleted_list(work_ethic);
        document.write("<h3>Technical Skills</h3>");
        generate_bulleted_list(technical_skills);
        document.write("<h3>Languages</h3>");
        generate_bulleted_list(languages);
        document.write("<hr>");

        document.write("<h3>Educational Background</h3>");
        generate_bulleted_list(education);
        document.write("<hr>");

        document.write("<ol>");
        if(!(emp_date_1 === "" || emp_end_1 === "" || emp_loc_1 === "")) {
            document.write("<li>" + emp_loc_1 + ": " + emp_date_1 + "-" + emp_end_1);
        }
        if(!(emp_date_2 === "" || emp_end_2 === "" || emp_loc_2 === "")) {
            document.write("<li>" + emp_loc_2 + ": " + emp_date_2 + "-" + emp_end_2);
        }
        if(!(emp_date_3 === "" || emp_end_3 === "" || emp_loc_3 === "")) {
            document.write("<li>" + emp_loc_3 + ": " + emp_date_3 + "-" + emp_end_3);
        }
        document.write("</ol><hr><h2>References:</h2>");

        generate_bulleted_list(references);
    }
}

document.getElementById("button_submit").addEventListener("click", generate_resume);