

function Postcard(props) {
    const {userName, postText} = props
  return (
    <div className=" border border-red-500 relative ml-auto w-full max-w-[26rem] flex-col rounded-xl mr-auto bg-transparent bg-clip-border text-gray-700 shadow-none">
      <div className="relative mx-0 mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
          className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
        />
        <div className="flex w-full flex-col gap-0.5">
          <div className="flex items-center justify-between">
            <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {userName}
            </h5>
            <div className="5 flex items-center gap-0"></div>
          </div>
        </div>
      </div>
      <div className="mb-6 p-0">
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {postText}
        </p>
      </div>
    </div>
  );
}

export default Postcard