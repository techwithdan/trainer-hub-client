import react, { FC } from "react";

const NavBar: FC = (prop) => {
  return (
    <div className="navbar bg-[#363b81] text-white">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Trainer Hub</a>
        <div className="divider divider-horizontal m-0"></div>
        <button className="btn bg-[#363b81] hover:bg-[#4c518f] border-0 text-white">
          Trainers
        </button>
        <div className="divider divider-horizontal m-0"></div>
        <button className="btn bg-[#363b81] hover:bg-[#4c518f] border-0 text-white">
          Pokemon
        </button>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://cdn.discordapp.com/attachments/1140681171617984683/1166420015868825630/image.png?ex=654a6c4a&is=6537f74a&hm=a6fbfff9b195d3daf8f6c23bd22d693aea4e0c4602d69072dce42263a1668f11&" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] bg-[#363b81] rounded-box w-52"
          >
            <li>
              <a className="justify-between">Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
