import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import axios from "axios";
// components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      // axios
      //   .get("http://localhost:3001/api/workouts", { mode: "cors" })
      //   .then((res) => {
      //     // const json = wait response.json();
      //     res.dispatch({ type: "SET_WORKOUTS", payload: json });
      //   })
      //   .catch((err) => {
      //     console.log("Error from ShowBookList");
      //   });
      try {
        const response = await fetch("http://localhost:3001/api/workouts", {
          mode: "cors",
        });
        const json = await response.json();

        if (response.ok) {
          dispatch({ type: "SET_WORKOUTS", payload: json });
        }
        console.log(json);
      } catch (e) {
        console.error(e);
      }
    };

    fetchWorkouts();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails workout={workout} key={workout._id} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
