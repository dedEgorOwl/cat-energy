import './Catalogue.scss';

function Catalogue() {
    return (
        <div className="wrapper catalogue">
            <div className="content">
                <div className="item">
                    <div className="top">
                        <div className="img"><img src="/icons/icon-cat-slim.svg" /></div>
                        <h1>ПОХУДЕНИЕ</h1>
                    </div>
                    <p>Ваш кот весит больше собаки и почти утратил способность лазить по деревьям? Пора на диету! Cat Energy Slim поможет вашему питомцу сбросить лишний вес.</p>
                    <button>КАТАЛОГ SLIM<img src="/icons/arrow-forward-outline.svg" /></button>
                </div>
                <div className="item">
                    <div className="top">
                        <div className="img"><img src="/icons/icon-cat-pro.svg" /></div>
                        <h1>ПОХУДЕНИЕ</h1>
                    </div>
                    <p>Заработать авторитет среди дворовых котов и даже собак? Серия Cat Energy Pro поможет вашему коту нарастить необходимые мышцы!</p>
                    <button>КАТАЛОГ PRO<img src="/icons/arrow-forward-outline.svg" /></button>
                </div>
            </div>
        </div>
    )
};

export default Catalogue;