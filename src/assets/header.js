import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const data_list = useSelector((state) => state.listOfData);

  const data_list_array = data_list.data;
  return (
    <>
      <header>
        <div className="header_container">
          <div className="header_menu">
            <ul className="header_data">
              <li>
                <Link to="/" className="link">
                  Shop World
                </Link>
              </li>
              <li id="cart_count">
                <Link to="/checkout" className="link">
                  <span>
                    {data_list_array.length > 0 ? data_list_array.length : 0}
                  </span>
                  <span>Cart</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
