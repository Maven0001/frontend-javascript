interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Ibrahim",
  lastName: "Ayinde",
  age: 30,
  location: "Lagos",
};

const student2: Student = {
  firstName: "Moshquroh",
  lastName: "Adekunle",
  age: 25,
  location: "Ibadan",
};

let studentsList: Student[] = [student1, student2];

// Wait for DOM to be ready
// ──────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  // Create table element
  const table = document.createElement("table");
  table.style.width = "100%";
  table.style.borderCollapse = "collapse";
  table.style.marginTop = "20px";
  table.style.fontFamily = "Arial, sans-serif";

  // Create header row
  const headerRow = table.insertRow();
  const headers = ["firstName", "location"];
  headers.forEach((text) => {
    const th = document.createElement("th");
    th.textContent = text;
    th.style.border = "1px solid #ccc";
    th.style.padding = "12px";
    th.style.backgroundColor = "#f4f4f4";
    th.style.textAlign = "left";
    headerRow.appendChild(th);
  });

  // ──────────────────────────────────────────────────
  // 4. Loop through students and append rows
  // ──────────────────────────────────────────────────
  studentsList.forEach((student) => {
    const row = table.insertRow();

    // First Name cell
    const nameCell = row.insertCell();
    nameCell.textContent = student.firstName;
    nameCell.style.border = "1px solid #ddd";
    nameCell.style.padding = "10px";

    // Location cell
    const locationCell = row.insertCell();
    locationCell.textContent = student.location;
    locationCell.style.border = "1px solid #ddd";
    locationCell.style.padding = "10px";

    // Optional: Add hover effect
    row.style.transition = "background 0.2s";
    row.addEventListener("mouseover", () => {
      row.style.backgroundColor = "#f0f8ff";
    });
    row.addEventListener("mouseout", () => {
      row.style.backgroundColor = "";
    });
  });

  // ──────────────────────────────────────────────────
  // 5. Append table to body (or a container)
  // ──────────────────────────────────────────────────
  document.body.appendChild(table);
});
