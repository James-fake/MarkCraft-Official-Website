import { SchematicFigure } from '../components/ui/SchematicFigure'

/**
 * B5 Connection（id #connection，族 D）。
 * 双链图谱视图用纯色示意占位框，不嵌入真实截图。
 */
export function ConnectionSection() {
  return (
    <section className="mc-section mc-connection" id="connection">
      <div className="mc-container">
        <h2 className="mc-h2">看见内容之间的关系</h2>
        <SchematicFigure
          className="mc-connection__frame"
          variant="graph"
          ariaLabel="双链图谱视图示意图，抽象示意，非真实截图"
          figcaption="双链图谱视图（示意）"
        />
        <div className="mc-connection__below">
          <p className="mc-connection__lead">
            双向链接、反向链接与双链图谱，把分散保存的条目汇成可探索的网络。
          </p>
          <p className="mc-connection__mono">
            SVG 2D，力导向 / 同心圆 / 树 / 网格 四种布局，含度数统计与邻居扩展。
          </p>
        </div>
      </div>
    </section>
  )
}
