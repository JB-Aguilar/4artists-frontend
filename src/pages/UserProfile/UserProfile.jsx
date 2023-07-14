import { useEffect, useState } from "react";
import { GetMyPosts, GetProfileAPI } from "../../services/profile.services";
import Postcard from "../../components/PostCard/Postcard";

function UserProfile() {
  const [userName, setUserName] = useState([]);
  const [myPosts, setMyPosts] = useState([]);

  console.log(myPosts);

  const getUser = async () => {
    const res = await GetProfileAPI();
    if (res) {
      setUserName(res);
    }
  };

  const getMyPosts = async () => {
    const res = await GetMyPosts();
    if (res) {
      setMyPosts(res);
    }
  };
  console.log(myPosts);

  /*{myPosts.length > 0 &&
                        myPosts
                          .slice()
                          .reverse()
                          .map((post) => (
                            <Postcard key={post.id} post={post} />
                          ))}*/

  useEffect(() => {
    getUser();
    getMyPosts();
  }, []);

  return (
    <section className="pt-16 bg-blueGray-50">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center"></div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
              {userName.username}
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
              Los Angeles, California
            </div>
            <div className="mb-2 text-blueGray-600 mt-10">
              <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
              Solution Manager - Creative Tim Officer
            </div>
            <div className="mb-2 text-blueGray-600">
              <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
              University of Computer Science
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                  <div
                    style={{ height: "500px", overflow: "auto" }}
                    className="bg-[#2F3E52]"
                  >
                    {myPosts.length > 0 &&
                      myPosts
                        .slice()
                        .reverse()
                        .map((post) => <Postcard key={post.id} post={post} />)}
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="relative  pt-8 pb-6 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-6/12 px-4 mx-auto text-center"></div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default UserProfile;
