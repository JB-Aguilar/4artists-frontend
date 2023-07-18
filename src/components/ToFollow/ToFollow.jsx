import { useEffect, useState } from "react";
import { GetUsers } from "../../services/user.services";

function ToFollow() {
  const [users, setUsers] = useState([]);
  const [randomUsernames, setRandomUsernames] = useState([]);

  const getUsers = async () => {
    const res = await GetUsers();
    if (res) {
      setUsers(res);
    }
  };

  const getRandomUsernames = () => {
    const usernames = users.map((user) => user.username);
    const shuffledUsernames = usernames.sort(() => 0.5 - Math.random());
    const selectedUsernames = shuffledUsernames.slice(0, 4);
    setRandomUsernames(selectedUsernames);
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      getRandomUsernames();
    }
  }, [users]);

  return (
    <div className="flex fixed z-5 right-0 top-0 mt-5 hidden lg:block ">
      <div className="max-w-sm bg-white overflow-hidden shadow-lg m-4 mr-20">
        <div className="flex">
          <div className="flex-1 m-2">
            <h2 className="px-4 py-2 text-xl w-48 font-semibold text-gray-700">
              Who to discover
            </h2>
          </div>
        </div>

        <hr className="border-gray-300" />

        {randomUsernames.map((username, index) => (
          <div className="flex flex-shrink-0" key={index}>
            <div className="flex-1 ">
              <div className="flex items-center w-48">
                <div>
                  <img
                    className="inline-block h-10 w-auto rounded-full ml-4 mt-2"
                    src="https://i.pinimg.com/736x/86/94/dc/8694dc58b64ff6409aef141d644dac87.jpg"
                    alt=""
                  />
                </div>
                <div className="ml-3 mt-3">
                  <p className="text-base leading-6 font-medium text-gray-500 cursor-pointer hover:text-[#9146FF]">
                    {username}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 px-4 py-2 m-2">
              <a href="" className="float-right">
                <button className="bg-transparent hover:bg-[#9146FF] text-green-500 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded-full">
                  Follow
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToFollow;
