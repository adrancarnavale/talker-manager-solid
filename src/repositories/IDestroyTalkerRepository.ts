export interface IdestroyTalkerRepository {
  destroy(id: number): Promise<void>;
}
