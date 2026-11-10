export const eventStore = {
  eventList: [],
  addEvent(event) {
    this.eventList.push(event);
    console.log("Contenu de l'eventStore :", this.eventList);
    return event;
  },
};
