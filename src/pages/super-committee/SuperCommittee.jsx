import { useState } from "react";
import SuperModal from "../../features/super_modal/SuperModal";
import styles from "./SuperCommittee.module.css";
import { CommitteeModal } from "../committee-modal/CommitteeModal";
import { CommitteeList } from "../committee-list/CommitteeList";

export const SuperCommittee = () => {
  const [isCommitteeModalOpen, setIsCommitteeModalOpen] = useState(false);

  const closeSuperModalHandler = () => {
    setIsCommitteeModalOpen(false);
  };
  return (
    <div className={styles["committee-container"]}>
      <div className={styles["tokens-header-container"]}>
        <span className={styles["tokens-header"]}>
          <span>Committee members</span>
          <span className={styles["tokens-desc"]}>Since 2023</span>
        </span>
        <button
          className={styles["generate-btn"]}
          onClick={() => setIsCommitteeModalOpen(true)}
        >
          <svg
            fill="currentColor"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            className={styles["plus-icon"]}
          >
            <path d="M14 1a1 1 0 011 1v12a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1h12zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z" />
            <path d="M8 4a.5.5 0 01.5.5v3h3a.5.5 0 010 1h-3v3a.5.5 0 01-1 0v-3h-3a.5.5 0 010-1h3v-3A.5.5 0 018 4z" />
          </svg>
          <span>Generate</span>
        </button>
        <SuperModal
          open={isCommitteeModalOpen}
          onClose={() => closeSuperModalHandler()}
        >
          <CommitteeModal setIsTokenModalOpen={setIsCommitteeModalOpen} />
        </SuperModal>
      </div>
      <CommitteeList />
    </div>
  );
};
