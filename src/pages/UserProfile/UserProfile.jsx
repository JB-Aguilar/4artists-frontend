import { useEffect, useState } from "react";
import { GetMyPosts, GetProfileAPI } from "../../services/user.services"
import Postcard from "../../components/PostCard/Postcard";


function UserProfile() {
    const [userName, setUserName] = useState([])
    const [myPosts, setMyPosts] = useState([])

    const getUser = async () => {
        const res = await GetProfileAPI()
        if(res){
            setUserName(res)
        }
    }

    const getMyPosts = async () => {
        const res = await GetMyPosts()
        if(res){
            setMyPosts(res)
        }
    }
    console.log(myPosts)



    useEffect(() => {
        getUser()
        getMyPosts()
    }, [])

  return (
    <div className="bg-indigo-200">
      <section className="pt-16 bg-blueGray-50">
        <div className="w-full lg:w-4/6 px-4 mx-auto">
          <div className="relative flex flex-col min-w-0 break-words bg-indigo-300 w-full mb-6 shadow-lg rounded-lg mt-16">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-60 px-9 flex justify-center">
                  <div className="flex justify-center pb-5">
                    <img
                      alt=""
                      src="https://as2.ftcdn.net/v2/jpg/05/56/32/59/1000_F_556325968_zoSMJU85U3B4j47iKSQTXeO04TXTc408.jpg"
                      className="shadow-xl rounded-full h-auto align-middle border-none -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                    />
                  </div>
                </div>
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
                  Rebooter - Nonamer - Dev Student
                </div>
                <div className="mb-2 text-blueGray-600">
                  <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                  University of Life
                </div>
              </div>
              <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      {myPosts.length > 0 &&
                        myPosts
                          .slice()
                          .reverse()
                          .map((post) => (
                            <Postcard key={post.id} post={post} />
                          ))}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserProfile;
