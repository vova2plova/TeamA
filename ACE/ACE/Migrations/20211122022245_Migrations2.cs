using Microsoft.EntityFrameworkCore.Migrations;

namespace ACE.Migrations
{
    public partial class Migrations2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "User",
                table: "Posts",
                newName: "UserNickName");

            migrationBuilder.CreateIndex(
                name: "IX_Posts_UserNickName",
                table: "Posts",
                column: "UserNickName");

            migrationBuilder.AddForeignKey(
                name: "FK_Posts_Users_UserNickName",
                table: "Posts",
                column: "UserNickName",
                principalTable: "Users",
                principalColumn: "NickName",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Posts_Users_UserNickName",
                table: "Posts");

            migrationBuilder.DropIndex(
                name: "IX_Posts_UserNickName",
                table: "Posts");

            migrationBuilder.RenameColumn(
                name: "UserNickName",
                table: "Posts",
                newName: "User");
        }
    }
}
