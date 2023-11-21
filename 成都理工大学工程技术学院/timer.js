/**
 * 时间配置函数，此为入口函数，不要改动函数名
 */
 async function scheduleTimer({
    providerRes,
    parserRes
} = {}) {
    return {
        totalWeek: 20, // 总周数
        startSemester: '1693152000000', // 开学时间
        startWithSunday: false, // 是否是周日为起始日
        showWeekend: true, // 是否显示周末
        forenoon: 4, // 上午课程节数
        afternoon: 4, // 下午课程节数
        night: 3, // 晚间课程节数
        sections: [
            { section: 1, startTime: "08:15", endTime: "09:00" },
            { section: 2, startTime: "09:05", endTime: "09:50" },
            { section: 3, startTime: "10:05", endTime: "10:50" },
            { section: 4, startTime: "10:55", endTime: "11:40" },
            { section: 5, startTime: "14:30", endTime: "15:15" },
            { section: 6, startTime: "15:20", endTime: "16:05" },
            { section: 7, startTime: "16:20", endTime: "17:05" },
            { section: 8, startTime: "17:10", endTime: "18:55" },
            { section: 9, startTime: "19:10", endTime: "19:55" },
            { section: 10, startTime: "20:00", endTime: "20:45"},
            { section: 11, startTime: "20:50", endTime: "21:35"}
        ], // 课程时间表
    }
 
}
