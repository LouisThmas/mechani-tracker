import { useReducer } from "react";
import './CreateTirePage.css'


export default function CreateTirePage() {
  type Action = | { type: "SET_FIELD"; field: keyof typeof initialFormState; value: any } | { type: "RESET" };
  
  const initialFormState = {
    owner: "",
    brand: "",
    model: "",
    vehicleType: "p" as "p" | "lt" | "c" | "xl" | "t",
    width: 0,
    ratio: 0,
    radius: 0,
    type: "summer" as "summer" | "winter" | "all-season",
    tread: 0,
    rim: "",
  };
  
  const [formState, dispatch] = useReducer(formReducer, initialFormState);

  const handleChange = (field: keyof typeof initialFormState, value: any) => {
    dispatch({ type: "SET_FIELD", field, value });
  };

  function formReducer(state: typeof initialFormState, action: Action) {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET":
      return initialFormState;
    default:
      return state;
    }
  }

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:3000/tires", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          owner: { name: formState.owner },
          brand: formState.brand,
          model: formState.model,
          size: {
            type: formState.vehicleType,
            width: Number(formState.width),
            ratio: Number(formState.ratio),
            radius: Number(formState.radius),
          },
          type: formState.type,
          tread: Number(formState.tread),
          rim: formState.rim == "true" ? true : false,
        }),
      });

      if (response.ok) {
        console.log(await response.json());
        dispatch({ type: "RESET" });
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
      <div className="content">
        <div className="form">
          <div className="customer-content">
            <label>Customer name : 
                <input name="owner.name" value={formState.owner} onChange={(e) => handleChange("owner", e.target.value)} />
            </label>
          </div>
          <div>
            <label>Tire Brand : 
                  <input name="brand" value={formState.brand} onChange={(e) => handleChange("brand", e.target.value)} />
            </label>
          </div>
          <div>
            <label>Tire model : 
                <input name="model" value={formState.model} onChange={(e) => handleChange("model", e.target.value)} />
            </label>
          </div>
          <div>
            <label>Size : 
              <select value={formState.vehicleType} onChange={(e) => handleChange("vehicleType", e.target.value)}>
                <option value="p">Passenger</option>
                <option value="lt">Light Truck</option>
                <option value="c">Commercial</option>
                <option value="xl">XL</option>
                <option value="t">Trailer</option>
              </select>
                <input name="size.width" value={formState.width} onChange={(e) => handleChange("width", e.target.value)} />
                <span>/</span>
                <input name="size.ratio" value={formState.ratio} onChange={(e) => handleChange("ratio", e.target.value)} />
                <span>R</span>
                <input name="size.radius" value={formState.radius} onChange={(e) => handleChange("radius", e.target.value)} />
            </label>
          </div>
          <div>
            <label>Tire Type : 
                <select value={formState.type} onChange={(e) => handleChange("type", e.target.value)}>
                  <option value="summer">Summer</option>
                  <option value="winter">Winter</option>
                  <option value="all-season">All Season</option>
                </select>
            </label>
          </div>
          <div>
            <label>Tire tread : 
                <input name="tread" value={formState.tread} onChange={(e) => handleChange("tread", e.target.value)} />
            </label>
          </div>
          <div>
            <label>Rim : 
                <select value={formState.rim} onChange={(e) => handleChange("rim", e.target.value)}>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
            </label>
          </div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
    </div>
  )
}