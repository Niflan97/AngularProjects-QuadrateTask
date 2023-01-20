using apiforstudent;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class StudentsController : Controller
{
    private readonly StudentsDBContext _studentsDBContext;

    public StudentsController(StudentsDBContext studentsDBContext)
    {
        _studentsDBContext = studentsDBContext;
    }

    [HttpGet]
    public async  Task<IActionResult> GetAllStudents()
    {
        var students = await _studentsDBContext.StudentTable.ToListAsync();

        return Ok(students);
    }


    [HttpPost]
    public async Task<IActionResult> AddStudents([FromBody]Students requestStudent)
    {
        requestStudent.Id = Guid.NewGuid();
        await _studentsDBContext.StudentTable.AddAsync(requestStudent);
        await _studentsDBContext.SaveChangesAsync();

        return Ok(requestStudent);

    }
    
}