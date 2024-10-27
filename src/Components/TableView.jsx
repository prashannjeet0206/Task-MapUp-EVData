import "./TableView.css";
const TableView = ({ data }) => {
  return (
    <table className="mt-10">
      <thead>
        <tr>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Vehicle Type</th>
        </tr>
      </thead>
      <tbody>
        {data.slice(0, 10).map((car, index) => (
          <tr key={index}>
            <td>{car.Make}</td>
            <td>{car.Model}</td>
            <td>{car["Model Year"]}</td>
            <td>{car["Electric Vehicle Type"]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableView;
