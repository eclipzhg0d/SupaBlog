"use client";
export default function Modal({ children }) {
  return (
    <>
      <div className="pt-5">
        <button
          className="btn bg-green-500"
          onClick={() => window.my_modal_2.showModal()}
        >
          Create a Post
        </button>
        <dialog id="my_modal_2" className="modal ">
          <form
            method="dialog"
            className="modal-box backdrop-blur bg-black/80 "
          >
            {children}
          </form>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </>
  );
}
