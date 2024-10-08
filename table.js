class Table {
  constructor(tableData) {
    this.tableData = tableData;
  }

  createTableHeader(headerData) {
    let open = '<thead><tr>';
    let close = '</tr></thead>';

    headerData.forEach((item) => {
      open += `<th>${item}</th>`;
    });

    const result = open + close;
    return result;
  }

  createTableCell(cellData) {
    let open = '<tbody>';
    let close = '</tbody>';

    cellData.forEach((item) => {
      open += `<tr>
                  <td>${item[0]}</td>
                  <td>${item[1]}</td>
                  <td>${item[2]}</td>
               </tr>`;
    });

    const result = open + close;

    return result;
  }

  renderTable(element) {
    let table = `<table class="table table-hover table-striped">
                  ${this.createTableHeader(this.tableData.columns)}
                  ${this.createTableCell(this.tableData.data)}
    </table>`;
    element.innerHTML = table;
  }
}

export default Table;
