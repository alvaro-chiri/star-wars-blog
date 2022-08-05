const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      person: [],
	  people: [],
	  planets: [],
	  vehicles: [],
    },
    actions: {
      getPerson: async (uid) => {
        try {
          const response = await fetch(
            `https://www.swapi.tech/api/people/${uid}`
          );
          if (response.ok) {
            const data = await response.json();
            setStore({ person: data.result.properties });
            console.log(getStore().person);
          }
        } catch (error) {
          throw Error(error);
        }
      },
      getAllPeople: async () => {
        try {
          const response = await fetch("https://www.swapi.tech/api/people");
          if (response.ok) {
            const data = await response.json();
            setStore({ people: data.results });
            console.log(getStore().people);
          }
        } catch (error) {
          throw Error(error);
        }
      },

      getAllPlanets: async () => {
		try {
			const response = await fetch("https://www.swapi.tech/api/planets");
			if (response.ok) {
			  const data = await response.json();
			  setStore({ planets: data.results });
			  console.log(getStore().planets);
			}
		  } catch (error) {
			throw Error(error);
		  }
		},

      getAllVehicles: async () => {
        try {
			const response = await fetch("https://www.swapi.tech/api/vehicles");
			if (response.ok) {
			  const data = await response.json();
			  setStore({ vehicles: data.results });
			  console.log(getStore().vehicles);
			}
		  } catch (error) {
			throw Error(error);
		  }
      },
    },
  };
};

export default getState;
