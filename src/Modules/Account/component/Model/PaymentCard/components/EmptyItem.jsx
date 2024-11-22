const EmptyItem = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <img src="/images/Oh.svg" width={200} alt="" />
        <span className=" text-xs text-zinc-500">
          Whoops! There seems to be no card.
        </span>
      </div>
    </>
  );
};

export default EmptyItem;
