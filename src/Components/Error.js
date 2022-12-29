import { useNavigate } from "react-router-dom";
export default function Error() {
  const navigate = useNavigate();

  return (
    <div>
      <h2> Data Not Found </h2>
      <button onClick={() => navigate("/")}> Back To Home Page </button>
    </div>
  );
}
