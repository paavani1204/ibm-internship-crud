function addStudent() {
  const nameInput = document.getElementById("name");
  const deptInput = document.getElementById("dept");
  const ageInput = document.getElementById("age");

  fetch("http://localhost:3000/students", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: nameInput.value,
      dept: deptInput.value,
      age: ageInput.value
    })
  }).then(() => {
    loadStudents();

    // clear inputs after adding
    nameInput.value = "";
    deptInput.value = "";
    ageInput.value = "";
  });
}

function loadStudents() {
  fetch("http://localhost:3000/students")
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById("list");
      list.innerHTML = "";

      data.forEach((s, i) => {
        list.innerHTML += `
          <li>
            ${s.name} - ${s.dept} - ${s.age}
            <button onclick="deleteStudent(${i})">Delete</button>
          </li>
        `;
      });
    });
}

function deleteStudent(index) {
  fetch(`http://localhost:3000/students/${index}`, {
    method: "DELETE"
  }).then(() => {
    loadStudents();
  });
}

// load data when page opens
loadStudents();

