import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/jobs/${id}`)
      .then((res) => setJob(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return <div>{job ? <h1>{job.title}</h1> : <p>Loading...</p>}</div>;
}

export default JobDetail;
