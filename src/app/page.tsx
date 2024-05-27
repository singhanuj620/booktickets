'use client'
import BasicModal from "@/components/modal/modal";
import { useAppDispatch } from "@/lib/hooks";
import { toggleModal } from "@/lib/features/modal";

export default function Home() {

  const dispatch = useAppDispatch();

  const fetchModalBody = () => {
    return (
      <div>
        <p>Modal Body</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        Hey
        <button onClick={() => dispatch(toggleModal(true))}>Open Modal</button>
        <BasicModal modalTitle={"Modal Title"} modalBody={fetchModalBody} />
      </h1>
    </div>
  );
}
