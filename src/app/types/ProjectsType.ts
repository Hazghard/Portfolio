export type ProjectsType={
    _id: string,
    _type: string,
    title: string,
    description: string,
    url: string,
    image: string,
    tech: {
      _id: string,
      _type: string,
      title: string,
      _createdAt: string,
      "_updatedAt": string,
      "_rev": string
    }[],
    _createdAt: string,
    _updatedAt: string,
    _rev: string
}