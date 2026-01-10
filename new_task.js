

document.getElementById("More-links-btn").addEventListener("click", function() {
  const tableBody = document.querySelector("#links-table tbody");
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>
      <select>
        <option selected>Select</option>
        <option>Github</option>
        <option>Figma</option>
        <option>Canva</option>
        <option>Other</option>
      </select>
    </td>
    <td>
        <input type="desription" placeholder="Any Description">
      </td>
    <td>
      <input type="url" placeholder="Enter link here">
    </td>
  `;
  tableBody.appendChild(newRow);
});

let rno = 2; // keep row number outside so it persists

document.getElementById("More-leader-btn").addEventListener("click", function() {
  const tableBody = document.querySelector("#More-leader tbody");
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${rno}| </td>
    <td>Name <input type="text"></td>
    <td>Mail <input type="email"></td>
  `;
  tableBody.appendChild(newRow);
  rno++;
});

document.getElementById("Project-members-btn").addEventListener("click",function(){
    const tableBody=document.querySelector("#Project-members tbody");
    const newRow = document.createElement("tr");
    newRow.innerHTML=`
    
                        <td>Name: <input type="text"></td>
                        <td>Role: 
                            <select>
                                <option>
                                    Frontend Developer
                                </option>
                                <option>
                                    Backend Developer
                                </option>
                                <option>
                                    Designer
                                </option>
                                <option selected>
                                    Other
                                </option>
                            </select>
                        </td>
                        <td>Mail <input type="email "></td>
                        `

    tableBody.appendChild(newRow);
})