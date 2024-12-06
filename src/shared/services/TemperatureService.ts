export namespace TemperatureService {

    /**
     * Draw a vertical jauge
     * @param ctx CanvasRenderingContext2D
     * @param x The x bottom left coordinate
     * @param y The y bottom left coordinate
     * @param width The width of the jauge
     * @param height The height of the jauge
     * @param filledPercentage The percentage of the jauge filled (between 0 and 1)
     * @private
     */
    export function drawJauge(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, filledPercentage:number) {
        // Draw vertical jauge
        ctx.fillStyle = "black";
        ctx.fillRect(x, y, width, height);

        drawValidInterval(ctx, x, y, width, height, 0.8, 0.92);

        ctx.fillStyle = "red";
        ctx.fillRect(x, y + height - (filledPercentage * height), width, filledPercentage * height);
    }

    function drawValidInterval(ctx: CanvasRenderingContext2D, x:number, y:number, width:number, height: number, min: number, max: number) {
        ctx.fillStyle = "green";
        ctx.fillRect(x, y + height - (max * height), width, (max - min) * height);
    }

}