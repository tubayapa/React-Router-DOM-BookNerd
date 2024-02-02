import { NavLink, Outlet,  Navigate } from "react-router-dom";

// const navigate = useNavigate();

const CategoryPage = () => {
  // kullanici giris yapmissa sayfayi goster
  // sadece user adminse outlet'i ekrana bas

  const user = {
    name: "Ahmet",
    type: "admin",
  };
  /// kullanici admin degilse sayfayi gosterme
  if (user.type !== "admin") {
      //? 1) hook kullanimi
      // react bu kullanimda uyari veriyor o yuzden 2.yi deniyoruz
    // navigate('/')
    //? 2) bilesen kullanimi

      return <Navigate to={"/"} replace />;
      // replace yazdigimiz zaman react rooter dom hafizada tutmuyor bunu. geri butonuna bsinca beni tkerar geriye goturmuyor hafizadan tamamen siliyor
  }

  return (
    <div className="d-flex align-items-center gap-5 p-5">
      <aside className="d-flex flex-column bg-primary rounded-4 p-5">
        <NavLink
          className="text-decoration-none text-white fs-3"
          to={"/category/story"}
        >
          {" "}
          Story
        </NavLink>
        <NavLink
          className="text-decoration-none text-white fs-3"
          to={"/category/novel"}
        >
          {" "}
          Novel
        </NavLink>
      </aside>
      {/* asil sayfa icerigi buraya gelecek, nerede basilacagini belirleyen ise OUTLET elementi */}
      <Outlet />
    </div>
  );
};

export default CategoryPage;
