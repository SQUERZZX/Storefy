import type { CSSProperties } from "react";
import { IconSearch, IconPin, IconThumb, IconRocket, IconCheck } from "./Icons";

const v = (o: Record<string, string | number>) => o as CSSProperties;

/* Как это работает */
export function SceneForm() {
  return (
    <div className="scene" aria-hidden="true">
      <div className="fld"><i style={v({ "--w": "85%", "--i": 0 })} /></div>
      <div className="fld"><i style={v({ "--w": "60%", "--i": 4 })} /></div>
     <div className="pill ok" style={v({ "--i": 8 })}><IconCheck size={14} /> Заявка отправлена</div>
    </div>
  );
}

export function SceneSite() {
  return (
    <div className="scene" aria-hidden="true">
      <div className="bar"><b /><b /><b /></div>
      <div className="blk hero" style={v({ "--i": 0 })} />
      <div className="cols">
        <div className="blk" style={v({ "--i": 2 })} />
        <div className="blk" style={v({ "--i": 3 })} />
        <div className="blk" style={v({ "--i": 4 })} />
      </div>
    </div>
  );
}

export function SceneLaunch() {
  return (
    <div className="scene" aria-hidden="true">
      <div className="pill" style={v({ "--i": 0 })}>Макет готов</div>
      <div className="pill acc" style={v({ "--i": 4 })}>Нравится <IconThumb size={14} /></div>
<div className="pill ok" style={v({ "--i": 8 })}><IconRocket size={14} /> Сайт запущен</div>
    </div>
  );
}

/* Зачем бизнесу сайт */
export function SceneFind() {
  return (
    <div className="scene" aria-hidden="true">
      <div className="pill" style={v({ "--i": 0 })}><IconSearch size={14} /> кофейня рядом</div>
      <div className="map">
        <div className="spot">
          <span className="ring" style={v({ "--i": 0, "--s": "1s" })} />
          <span className="ring" style={v({ "--i": 2, "--s": "1s" })} />
          <span className="pin"><IconPin size={26} /></span>
        </div>
      </div>
    </div>
  );
}

export function SceneChat() {
  return (
    <div className="scene" aria-hidden="true">
      <div className="bub in" style={v({ "--i": 0, "--s": "0.45s" })}>Сколько стоит стрижка?</div>
      <div className="bub out" style={v({ "--i": 1, "--s": "0.45s" })}>400 сом. Записать вас?</div>
      <div className="bub in" style={v({ "--i": 2, "--s": "0.45s" })}>Да, на 18:00</div>
    </div>
  );
}

export function SceneUpdate() {
  return (
    <div className="scene" aria-hidden="true">
      <div className="pill" style={v({ "--i": 0 })}>Капучино</div>
      <div className="rowx">
        <span className="old" style={v({ "--i": 2 })}>150 сом</span>
        <span className="new" style={v({ "--i": 4 })}>120 сом</span>
        <span className="pill acc" style={v({ "--i": 6 })}>Акция −20%</span>
      </div>
      <div className="pill ok" style={v({ "--i": 8 })}><IconCheck size={14} /> Сайт обновлён</div>
    </div>
  );
}

/* Тарифы */
export function PlanPage() {
  return (
    <div className="scene sm" aria-hidden="true">
      <div className="blk hero" style={v({ "--i": 0 })} />
      <div className="fld"><i style={v({ "--w": "80%", "--i": 1 })} /></div>
      <div className="fld"><i style={v({ "--w": "55%", "--i": 3 })} /></div>
    </div>
  );
}

export function PlanMenu() {
  return (
    <div className="scene sm" aria-hidden="true">
      <div className="pill" style={v({ "--i": 0 })}>Капучино · 150</div>
      <div className="pill" style={v({ "--i": 1 })}>Круассан · 90</div>
      <div className="pill" style={v({ "--i": 2 })}>Завтрак · 290</div>
    </div>
  );
}

export function PlanKey() {
  return (
    <div className="scene sm" aria-hidden="true">
      <div className="pill acc" style={v({ "--i": 0 })}>storefy.kg</div>
      <div className="bub out" style={v({ "--i": 3, "--s": "0.3s" })}>Здравствуйте! Чем помочь?</div>
    </div>
  );
}