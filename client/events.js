class Events
{
  constructor()
  {
    this._listeners = new Set;
  }

  listen(name, callback)
  {
    this._listeners.add({
      name,
      callback,
    });
  }

  emit(name, ...data)
  {
    this._listeners.forEach(listener => {
      if (listener.name === name){
        // same as writing (data[0], data[1], data[2], data[3])
        listener.callback(...data);
      }
    });
  }
}