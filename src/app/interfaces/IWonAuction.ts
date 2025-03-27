import { IArtwork } from "./IArtwork";

  export interface IWonAuction extends IArtwork {
    winningBid: number;
    claimed: boolean;
    claimedDate?: number | null;
  }