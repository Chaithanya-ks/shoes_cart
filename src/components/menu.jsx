import "./menu.css";
import { Link } from "react-router-dom";

const Menu=()=>{
    return(
        <>
<div className="hai card-grid1">
<card className="text">Mens</card>
<Link className="btn btn-primary button" to="/shop1">
<button >Shop Now</button>
</Link>
</div>


<div className="card-grid2">
<card className="text">Womens</card>
<Link className="btn btn-primary button1" to="/shop2">
<button >Shop Now</button>
</Link>
</div>


<div className="card-grid3">
<card className="text">Kids</card>
<Link className="btn btn-primary button2" to="/shop3">
<button >Shop Now</button>
</Link>
</div>

<div className="card-grid4">
<card className="text">Adults</card>
<Link className="btn btn-primary button3" to="/shop4">
<button >Shop Now</button>
</Link>
</div>
</>
    );
};
export default Menu;