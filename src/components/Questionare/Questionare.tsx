import "./Questionare.scss"

export const Questionare =()=> {
  return (
        <div className="form-questionare">
            <p className="form-questionare_text">Название: Соревнования по футболу</p>
            <p className="form-questionare_text">Вид спорта: Футбол</p>
            <p className="form-questionare_text">Место проведения: Текст</p>
            <p className="form-questionare_text">Дата проведения: TEXT</p>
            <button className="form-questionare_list_members">
                <p className="form-questionare_list_members_text" >Список участников</p>
            </button>
        </div>
  );
}